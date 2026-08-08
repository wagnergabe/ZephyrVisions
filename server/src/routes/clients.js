import { Router } from "express";
import {
  createClient,
  getClients,
} from "../controllers/clientController.js";
import {
  requireAuth,
  requireAdmin,
} from "../middleware/auth.js";

const router = Router();

router.get("/", requireAuth, requireAdmin, getClients);

router.post("/", requireAuth, requireAdmin, createClient);

export default router;