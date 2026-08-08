import { Router } from "express";
import {
  createProject,
  getProjectById,
  updateProject,
} from "../controllers/projectController.js";
import {
  requireAuth,
  requireAdmin,
} from "../middleware/auth.js";

const router = Router();

router.get(
  "/:projectId",
  requireAuth,
  requireAdmin,
  getProjectById
);

router.post(
  "/",
  requireAuth,
  requireAdmin,
  createProject
);

router.put(
  "/:projectId",
  requireAuth,
  requireAdmin,
  updateProject
);

export default router;