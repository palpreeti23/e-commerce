import Order from "../models/order.models.js";
import Product from "../models/product.models.js";
import User from "../models/user.models.js";

async function adminDashboardStats(req, res) {
  try {
    const totalUser = await User.countDocuments();
    const totalProduct = await Product.countDocuments();
    const totalOrder = await Order.countDocuments();

    const revenueResult = await Order.aggregate([
      {
        $match: {
          $or: [
            { paymentMethod: "online", paymentStatus: "paid" },
            { paymentMethod: "cod", orderStatus: "delivered" },
          ],
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
    ]);

    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    const pendingOrders = await Order.countDocuments({ orderStatus: "placed" });
    const deliveredOrders = await Order.countDocuments({
      orderStatus: "delivered",
    });

    return res.status(200).json({
      success: true,
      message: "Dashboard statistics fetched successfully!",
      stats: {
        totalUser,
        totalProduct,
        totalOrder,
        totalRevenue,
        pendingOrders,
        deliveredOrders,
      },
    });
  } catch (error) {
    console.error("Error getting admin dashboard stats.", error);
    return res.status(500).json({
      success: false,
      message: "Error getting admin dashboard stats!",
    });
  }
}

export { adminDashboardStats };
