import { Router } from "express";
import { upload } from "../config/upload.js";
import { getProjectDeliverables, uploadProjectDeliverable, downloadDeliverable } from "../controllers/deliverableController.js";

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
  "/:projectId/deliverables",
  requireAuth,
  requireAdmin,
  getProjectDeliverables
);

router.post(
  "/:projectId/deliverables",
  requireAuth,
  requireAdmin,
  upload.single("file"),
  uploadProjectDeliverable
);

router.get(
  "/:projectId",
  requireAuth,
  requireAdmin,
  getProjectById
);

router.get(
  "/deliverables/:deliverableId/download",
  requireAuth,
  requireAdmin,
  downloadDeliverable
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