import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

// Any logged-in user
router.get("/user", authenticate, (req: any, res) => {
  res.json({
    message: "User route accessed",
    user: req.user,
  });
});

// Only ADMIN (artist)
router.get("/admin", authenticate, authorize("ADMIN"), (req: any, res) => {
  res.json({
    message: "Admin route accessed",
  });
});

export default router;