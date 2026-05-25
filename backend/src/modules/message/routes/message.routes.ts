// src/modules/message/routes/message.routes.ts
import { Router } from "express";
import { MessageController } from "../controllers/message.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

// User sends message
router.post("/", authenticate, MessageController.send);

// Admin reads messages
router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  MessageController.getAll
);

export default router;