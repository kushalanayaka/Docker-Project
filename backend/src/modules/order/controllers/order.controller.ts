// src/modules/order/controllers/order.controller.ts

import { Request, Response } from "express";
import { OrderService } from "../services/order.service";

export class OrderController {
  static async create(
    req: Request,
    res: Response
  ) {
    try {
      const order =
        await OrderService.create(req.body);

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

  static async getAll(
    req: Request,
    res: Response
  ) {
    try {
      const orders =
        await OrderService.getAll();

      res.json(orders);

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getById(
  req: any,
  res: Response
) {
    try {
      const order =
        await OrderService.getById(
          req.params.id
        );

      if (!order) {
        return res.status(404).json({
          message: "Order not found",
        });
      }

      res.json(order);

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async updateStatus(
  req: any,
  res: Response
) {
    try {
      const order =
        await OrderService.updateStatus(
          req.params.id,
          req.body.status
        );

      res.json({
        message:
          "Order status updated",
        order,
      });

    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}