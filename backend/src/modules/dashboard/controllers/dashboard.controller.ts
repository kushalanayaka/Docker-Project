import { Request, Response } from "express";
import { DashboardService } from "../services/dashboard.service";
import { MessageService } from "../../message/services/message.service";

export class DashboardController {
  static async getStats(
    req: Request,
    res: Response
  ) {
    try {
      const stats =
        await DashboardService.getStats();

      res.json(stats);

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getRecentOrders(
    req: Request,
    res: Response
  ) {
    try {
      const orders =
        await DashboardService.getRecentOrders();

      res.json(orders);

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getRecentMessages(
    req: Request,
    res: Response
  ) {
    try {
      const messages =
        await MessageService.getRecentMessages();

      res.json(messages);

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}