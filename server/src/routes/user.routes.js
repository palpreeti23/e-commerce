import { Router } from "express";
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middlewares.js";
import { getAllUsers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userAuthMiddleware, adminAuthMiddleware, getAllUsers);

export default router;
