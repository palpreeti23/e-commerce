import { Router } from "express";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middlewares.js";
import {
  cancelOrder,
  getAllOrders,
  getMyOrders,
  getSingleOrder,
  placeOrder,
  updateOrderStatus,
  verifyRazorpayPayment,
} from "../controllers/order.controllers.js";

const router = Router();

router.post("/orders", userAuthMiddleware, placeOrder);

router.get("/orders/my-orders", userAuthMiddleware, getMyOrders);

router.get("/orders/:orderId", userAuthMiddleware, getSingleOrder);

router.post(
  "/orders/verify-payment",
  userAuthMiddleware,
  verifyRazorpayPayment,
);

router.patch("/orders/:orderId/cancel", userAuthMiddleware, cancelOrder);

//admin routes
router.get("/orders", userAuthMiddleware, adminAuthMiddleware, getAllOrders);

router.patch(
  "/orders/:orderId/status",
  userAuthMiddleware,
  adminAuthMiddleware,
  updateOrderStatus,
);

export default router;
