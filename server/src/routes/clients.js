import { Router } from "express";
import {
  createClient,
  getClients,
} from "../controllers/clientController.js";
import {
  requireAuth,
  requireAdmin,
} from "../middleware/auth.js";
import { getClientDashboard, getClientProjectById, getClientProjectDeliverables, downloadClientDeliverable } from "../controllers/clientDashboardController.js";

const router = Router();

router.get(
  "/dashboard",
  requireAuth,
  getClientDashboard
);

router.get(
  "/projects/:projectId",
  requireAuth,
  getClientProjectById
);

router.get(
  "/projects/:projectId/deliverables",
  requireAuth,
  getClientProjectDeliverables
);

router.get(
  "/deliverables/:deliverableId/download",
  requireAuth,
  downloadClientDeliverable
);

router.get("/", requireAuth, requireAdmin, getClients);

router.post("/", requireAuth, requireAdmin, createClient);

export default router;