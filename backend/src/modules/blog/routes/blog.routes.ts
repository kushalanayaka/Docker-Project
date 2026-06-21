import { Router } from "express";
import { BlogController } from "../controllers/blog.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

// Public
router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getById);

// Admin
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  BlogController.create
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  BlogController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  BlogController.delete
);

export default router;