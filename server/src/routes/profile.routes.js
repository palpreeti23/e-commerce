import { Router } from "express";
import {
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

export default router;
