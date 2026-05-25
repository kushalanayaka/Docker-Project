// src/modules/message/controllers/message.controller.ts
import { Request, Response } from "express";
import { MessageService } from "../services/message.service";

export class MessageController {
  static async send(req: any, res: Response) {
    try {
      const message = await MessageService.send(
        req.user.userId,
        req.body.content
      );

      res.status(201).json(message);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const messages = await MessageService.getAll();
    res.json(messages);
  }
}