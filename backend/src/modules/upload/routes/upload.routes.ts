import { Router } from "express";

import { UploadController } from "../controllers/upload.controller";

import { upload } from "../middleware/multer.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  UploadController.uploadImage
);

export default router;