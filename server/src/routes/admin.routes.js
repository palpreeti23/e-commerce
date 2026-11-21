import { Router } from "express";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middlewares.js";
import { adminDashboardStats } from "../controllers/admin.controllers.js";

const router = Router();

router.get(
  "/dashboard",
  userAuthMiddleware,
  adminAuthMiddleware,
  adminDashboardStats,
);

export default router;
