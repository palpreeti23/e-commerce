import mongoose from "mongoose";
import User from "../models/user.models.js";
import Product from "../models/product.models.js";
import razorpay from "../config/razorpay.js";
import Order from "../models/order.models.js";
import crypto from "node:crypto";

async function placeOrder(req, res) {
  try {
    const userId = req.user._id;
    const {
      checkoutType,
      productId,
      quantity,
      selectedProductIds,
      shippingAddress,
      paymentMethod,
    } = req.body;

    if (!["cart", "buyNow", "selected"].includes(checkoutType)) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid checkout type!",
      });
    }

    if (!["cod", "online"].includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid payment method!",
      });
    }

    const requiredFields = [
      "fullName",
      "phone",
      "addressLine",
      "city",
      "state",
      "postalCode",
      "country",
    ];

    if (
      !shippingAddress ||
      requiredFields.some(
        (field) =>
          typeof shippingAddress[field] !== "string" ||
          !shippingAddress[field].trim(),
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a complete shipping address!!",
      });
    }

    if (checkoutType === "buyNow") {
      if (
        !mongoose.isValidObjectId(productId) ||
        !Number.isInteger(quantity) ||
        quantity < 1
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid product and quantity!",
        });
      }
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    let cartItems = [];

    if (checkoutType === "cart") {
      if (!user.cart || user.cart.length === 0) {
        return res.status(400).json({
          success: false,
          message: "User cart is empty!",
        });
      }

      cartItems = user.cart.map((item) => ({
        productId: item.product,
        quantity: item.quantity,
      }));
    } else if (checkoutType === "selected") {
      if (
        !Array.isArray(selectedProductIds) ||
        selectedProductIds.length === 0 ||
        !selectedProductIds.every((id) => mongoose.isValidObjectId(id))
      ) {
        return res.status(400).json({
          success: false,
          message: "Please select valid cart products!",
        });
      }

      const selectedItems = user.cart.filter((item) =>
        selectedProductIds.includes(item.product.toString()),
      );

      if (selectedItems.length !== selectedProductIds.length) {
        return res.status(400).json({
          success: false,
          message: "Some selected products are not in your cart!",
        });
      }

      cartItems = selectedItems.map((item) => ({
        productId: item.product,
        quantity: item.quantity,
      }));
    } else if (checkoutType === "buyNow") {
      cartItems = [
        {
          productId,
          quantity,
        },
      ];
    }

    let subtotal = 0;
    const orderItems = [];
    const productsToUpdate = [];

    for (const item of cartItems) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found!",
        });
      }

      if (!Number.isInteger(item.quantity) || item.quantity < 1) {
        return res.status(400).json({
          success: false,
          message: "Invalid product quantity!",
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `${product.name} has insufficient stock!`,
        });
      }

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: item.quantity,
      });

      productsToUpdate.push({
        productId: product._id,
        quantity: item.quantity,
      });
    }

    const shippingFee = 0;
    const totalAmount = subtotal + shippingFee;

    const orderData = {
      user: userId,
      checkoutType,
      items: orderItems,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      paymentMethod,
      paymentStatus: "pending",
      orderStatus: "placed",
    };

    //RAZORPAY PAYMENT
    if (paymentMethod === "online") {
      const razorpayOrder = await razorpay.orders.create({
        amount: Math.round(totalAmount * 100),
        currency: "INR",
        receipt: `preetify_${Date.now()}`,
      });

      orderData.razorpayOrderId = razorpayOrder.id;

      const [order] = await Order.create([orderData]);

      return res.status(200).json({
        success: true,
        message: "Razorpay order creted successfully!",
        order,
        razorpayKeyId: process.env.RAZORPAY_KEY_ID,
        razorpayOrderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
      });
    }

    //payment by COD
    const [order] = await Order.create([orderData]);
    const deductedProducts = [];
    try {
      for (const item of productsToUpdate) {
        const updatedProduct = await Product.findOneAndUpdate(
          {
            _id: item.productId,
            stock: { $gte: item.quantity },
          },
          {
            $inc: { stock: -item.quantity },
          },
          { new: true },
        );

        if (!updatedProduct) {
          throw new Error("Product stock changed. Please try again!");
        }
        deductedProducts.push(item);
      }

      // clear cart
      if (checkoutType === "cart") {
        user.cart = [];
      } else if (checkoutType === "selected") {
        user.cart = user.cart.filter(
          (item) => !selectedProductIds.includes(item.product.toString()),
        );
      }

      if (checkoutType !== "buyNow") {
        await user.save();
      }
    } catch (error) {
      //restore deducted stock if something fails

      for (const item of deductedProducts) {
        await Product.findByIdAndUpdate(item.productId, {
          $inc: { stock: item.quantity },
        });
      }

      await Order.findByIdAndDelete(order._id);
      throw error;
    }

    return res.status(201).json({
      success: true,
      message: "Order placing successfully!",
      order,
    });
  } catch (error) {
    console.error("Error placing an order", error);
    return res.status(500).json({
      success: false,
      message: "Error placing an order!",
    });
  }
}

async function getMyOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      message: "Fetching my orders!",
      orders,
    });
  } catch (error) {
    console.error("Error getting my orders", error);
    return res.status(500).json({
      success: false,
      message: "Error getting my orders!",
    });
  }
}

async function getSingleOrder(req, res) {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
        order,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      order,
    });
  } catch (error) {
    console.error("Error getting an order", error);
    return res.status(500).json({
      success: false,
      message: "Error getting an order!",
    });
  }
}

async function cancelOrder(req, res) {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    if (!["placed", "processing"].includes(order.orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "This order cannot be cancelled!",
      });
    }

    //restore product stock
    for (const item of order.items) {
      const product = await Product.findByIdAndUpdate(
        item.product,
        { $inc: { stock: item.quantity } },
        { new: true },
      );

      if (!product) {
        throw new Error("Product not found while restoring stock!");
      }
    }
    //update order status

    order.orderStatus = "cancelled";
    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order cancelled successfully!",
      order,
    });
  } catch (error) {
    console.error("Error canceling an order", error);
    return res.status(500).json({
      success: false,
      message: "Error canceling an order!",
    });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    if (orders.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No orders found!",
        orders: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: " Fetched orders successfully!",
      orders,
    });
  } catch (error) {
    console.error("Error getting all orders", error);
    return res.status(500).json({
      success: false,
      message: "Error getting all orders!",
    });
  }
}

async function updateOrderStatus(req, res) {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }
    if (order.paymentMethod === "online" && order.paymentStatus !== "paid") {
      return res.status(400).json({
        success: false,
        message: "Cannot process an unpaid online order!",
      });
    }

    const validStatus = ["placed", "processing", "shipped", "delivered"];

    if (!validStatus.includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status!",
      });
    }

    const allowedTransitions = {
      placed: ["processing"],
      processing: ["shipped"],
      shipped: ["delivered"],
      delivered: [],
      cancelled: [],
    };

    if (!allowedTransitions[order.orderStatus].includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: `Cannot change order status from ${order.orderStatus} to ${orderStatus}!`,
      });
    }

    order.orderStatus = orderStatus;
    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully!",
      order,
    });
  } catch (error) {
    console.error("Error updating order status", error);
    return res.status(500).json({
      success: false,
      message: "Error updating order status!",
    });
  }
}

async function verifyRazorpayPayment(req, res) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // 1. Validate payment details
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment details are required!",
      });
    }

    // 2. Generate signature using Razorpay secret
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // 3. Compare generated and received signatures safely
    const generatedBuffer = Buffer.from(generatedSignature, "hex");
    const receivedBuffer = Buffer.from(razorpay_signature, "hex");

    const isAuthentic =
      generatedBuffer.length === receivedBuffer.length &&
      crypto.timingSafeEqual(generatedBuffer, receivedBuffer);

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed!",
      });
    }

    // 4. Find the order belonging to the logged-in user
    const order = await Order.findOne({
      razorpayOrderId: razorpay_order_id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    // 5. Prevent processing the same payment twice
    if (order.paymentStatus === "paid") {
      return res.status(200).json({
        success: true,
        message: "Payment already verified!",
        order,
      });
    }

    if (order.paymentStatus !== "pending") {
      return res.status(400).json({
        success: false,
        message: "This order cannot be verified!",
      });
    }

    // 6. Deduct stock after successful payment verification
    const deductedProducts = [];

    try {
      for (const item of order.items) {
        const product = await Product.findOneAndUpdate(
          {
            _id: item.product,
            stock: { $gte: item.quantity },
          },
          {
            $inc: { stock: -item.quantity },
          },
          { new: true },
        );

        if (!product) {
          throw new Error(
            "Insufficient stock for one or more products. A refund is required.",
          );
        }

        deductedProducts.push({
          productId: item.product,
          quantity: item.quantity,
        });
      }

      // 7. Remove purchased products from the cart
      if (order.checkoutType !== "buyNow") {
        const user = await User.findById(order.user);

        if (!user) {
          throw new Error("User not found!");
        }

        const orderedProductIds = order.items.map((item) =>
          item.product.toString(),
        );

        user.cart = user.cart.filter(
          (item) => !orderedProductIds.includes(item.product.toString()),
        );

        await user.save();
      }

      // 8. Update payment details
      order.paymentStatus = "paid";
      order.razorpayPaymentId = razorpay_payment_id;
      await order.save();

      return res.status(200).json({
        success: true,
        message: "Payment verified successfully!",
        order,
      });
    } catch (error) {
      // Restore stock if the verification process fails
      for (const item of deductedProducts) {
        await Product.findByIdAndUpdate(item.productId, {
          $inc: { stock: item.quantity },
        });
      }

      throw error;
    }
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Payment verification failed!",
    });
  }
}

export {
  placeOrder,
  getMyOrders,
  getSingleOrder,
  cancelOrder,
  getAllOrders,
  updateOrderStatus,
  verifyRazorpayPayment,
};
