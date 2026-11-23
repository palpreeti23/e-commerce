import { Router } from "express";
import {
  addAddress,
  deleteAddress,
  getUserProfile,
  updateUserProfile,
} from "../controllers/profile.controllers.js";
import { userAuthMiddleware } from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.get("/profile", userAuthMiddleware, getUserProfile);
router.patch(
  "/profile",
  userAuthMiddleware,
  upload.single("image"),
  updateUserProfile,
);

router.post("/profile/address", userAuthMiddleware, addAddress);
router.delete("/profile/address/:addressId", userAuthMiddleware, deleteAddress);

export default router;
