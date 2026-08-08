import { Router } from "express";
import { getAdminDashboard } from "../controllers/adminController.js";
import {
  requireAuth,
  requireAdmin,
} from "../middleware/auth.js";

const router = Router();

router.get(
  "/dashboard",
  requireAuth,
  requireAdmin,
  getAdminDashboard
);

export default router;