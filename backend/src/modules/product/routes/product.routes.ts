// src/modules/product/routes/product.routes.ts
import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

// Public routes
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);

// Admin routes
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  ProductController.create
);

export default router;