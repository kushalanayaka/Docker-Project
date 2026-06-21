// src/modules/auth/routes/test.routes.ts

import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware";
import { authorize } from "../../../middleware/role.middleware";

const router = Router();

/*
  GET /api/test/user
  Any authenticated user
*/
router.get(
  "/user",
  authenticate,
  (req: any, res) => {
    res.json({
      success: true,
      message: "User route accessed successfully",
      user: req.user,
    });
  }
);

/*
  GET /api/test/admin
  ADMIN only
*/
router.get(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  (req: any, res) => {
    res.json({
      success: true,
      message: "Admin route accessed successfully",
      user: req.user,
    });
  }
);

export default router;