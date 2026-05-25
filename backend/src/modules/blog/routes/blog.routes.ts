// src/modules/blog/routes/blog.routes.ts
import { Router } from "express";
import { BlogController } from "../controllers/blog.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

// Public
router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getById);

// Admin only
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  BlogController.create
);

export default router;