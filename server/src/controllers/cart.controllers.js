import Product from "../models/product.models.js";
import User from "../models/user.models.js";

async function addToCart(req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    if (product.stock < 1) {
      return res.status(400).json({
        success: false,
        message: "Product is out of stock!",
      });
    }

    const user = req.user;
    const existingItem = user.cart.find(
      (item) => item.product.toString() === productId,
    );

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        return res.status(409).json({
          success: false,
          message: "Product quantity exceeds stock limit!",
        });
      }
      existingItem.quantity += 1;
    } else {
      user.cart.push({
        product: productId,
        quantity: 1,
      });
    }

    await user.save();
    return res.status(200).json({
      success: true,
      message: "Product added to the cart!",
      cartItem: user.cart,
    });
  } catch (error) {
    console.error("Error adding products to cart!", error);
    return res.status(500).json({
      success: false,
      message: "Error adding products to cart!",
    });
  }
}

async function getCart(req, res) {
  try {
    const cart = await User.findById(req.user._id)
      .select("cart")
      .populate("cart.product");

    return res.status(200).json({
      success: true,
      message: "Fetched cart items successfully!!",
      cart: cart.cart,
    });
  } catch (error) {
    console.error("Error fetching cart products!", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching cart products!",
    });
  }
}

async function updateQuantity(req, res) {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid quantity!",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    if (product.stock < quantity) {
      return res.status(409).json({
        success: false,
        message: "Product quantity exceeds available stock!",
      });
    }
    const user = req.user;

    const cartItem = user.cart.find(
      (item) => item.product.toString() === productId,
    );

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart!",
      });
    }
    cartItem.quantity = quantity;

    await user.save();
    return res.status(200).json({
      success: true,
      message: "updated cart quantity successfully!",
      cart: user.cart,
    });
  } catch (error) {
    console.error("Error updating product quantity!", error);
    return res.status(500).json({
      success: false,
      message: "Error updating product quantity!",
    });
  }
}

async function removeProductsFromCart(req, res) {
  try {
    const { productId } = req.params;
    const user = req.user;
    const alreadyExists = user.cart.some(
      (item) => item.product.toString() === productId,
    );

    if (!alreadyExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart!",
      });
    }
    user.cart = user.cart.filter(
      (item) => item.product.toString() !== productId,
    );
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Removed product from cart!",
      cart: user.cart,
    });
  } catch (error) {
    console.error("Error removing product from cart?", error);
    return res.status(500).json({
      success: false,
      message: "Error removing product from cart!",
    });
  }
}

async function clearCart(req, res) {
  try {
    const user = req.user;
    user.cart = [];
    await user.save();

    return res.status(200).json({
      success: true,
      message: "cleared cart successfully!",
      cart: user.cart,
    });
  } catch (error) {
    console.error("Error clearing cart?", error);
    return res.status(500).json({
      success: false,
      message: "Error clearing cart!",
    });
  }
}

export {
  addToCart,
  removeProductsFromCart,
  getCart,
  updateQuantity,
  clearCart,
};
