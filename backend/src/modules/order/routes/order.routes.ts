// src/modules/order/routes/order.routes.ts
import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

// Public order request
router.post("/", OrderController.create);

// Admin view all orders
router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  OrderController.getAll
);

export default router;