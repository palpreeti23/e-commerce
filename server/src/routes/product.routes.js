import { Router } from "express";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middlewares.js";

import {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post(
  "/product",
  userAuthMiddleware,
  adminAuthMiddleware,
  upload.single("image"),
  addProduct,
);

router.get("/products", getAllProduct);

router.get("/product/:id", getSingleProduct);

router.patch(
  "/product/:id",
  userAuthMiddleware,
  adminAuthMiddleware,
  upload.single("image"),
  updateProduct,
);

router.delete(
  "/product/:id",
  userAuthMiddleware,
  adminAuthMiddleware,
  deleteProduct,
);

export default router;
