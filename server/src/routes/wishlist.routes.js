import { Router } from "express";
import {
  deleteProductFromWishlist,
  addProductsToWishlist,
  getWishlist,
} from "../controllers/wishlist.controllers.js";
import { userAuthMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post(
  "/wishlist/product/:productId",
  userAuthMiddleware,
  addProductsToWishlist,
);
router.get("/wishlist", userAuthMiddleware, getWishlist);
router.delete(
  "/wishlist/product/:productId",
  userAuthMiddleware,
  deleteProductFromWishlist,
);

export default router;
