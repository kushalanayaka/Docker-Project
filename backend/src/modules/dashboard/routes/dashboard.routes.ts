import { Router } from "express";

import { DashboardController }
from "../controllers/dashboard.controller";

import { authenticate }
from "../../../middleware/auth.middleware";

import { authorize }
from "../../../middleware/role.middleware";

const router = Router();

router.get(
  "/stats",
  authenticate,
  authorize("ADMIN"),
  DashboardController.getStats
);

router.get(
  "/recent-orders",
  authenticate,
  authorize("ADMIN"),
  DashboardController.getRecentOrders
);

router.get(
  "/recent-messages",
  authenticate,
  authorize("ADMIN"),
  DashboardController.getRecentMessages
);

export default router;