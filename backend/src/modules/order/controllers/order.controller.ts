// src/modules/order/controllers/order.controller.ts
import { Request, Response } from "express";
import { OrderService } from "../services/order.service";

export class OrderController {
  static async create(req: Request, res: Response) {
    try {
      const order = await OrderService.create(req.body);

      res.status(201).json({
        message: "Order request submitted",
        order,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  static async getAll(req: Request, res: Response) {
    const orders = await OrderService.getAll();

    res.json(orders);
  }
}