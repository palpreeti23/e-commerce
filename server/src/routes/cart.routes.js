import { Router } from "express";
import { userAuthMiddleware } from "../middlewares/auth.middlewares.js";
import {
  addToCart,
  clearCart,
  getCart,
  removeProductsFromCart,
  updateQuantity,
} from "../controllers/cart.controllers.js";

const router = Router();

router.post("/cart/product/:productId", userAuthMiddleware, addToCart);
router.get("/cart", userAuthMiddleware, getCart);
router.patch("/cart/product/:productId", userAuthMiddleware, updateQuantity);
router.delete(
  "/cart/product/:productId",
  userAuthMiddleware,
  removeProductsFromCart,
);
router.delete("/cart", userAuthMiddleware, clearCart);

export default router;
