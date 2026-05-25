// src/modules/blog/controllers/blog.controller.ts
import { Request, Response } from "express";
import { BlogService } from "../services/blog.service";

export class BlogController {
  static async create(req: Request, res: Response) {
    try {
      const post = await BlogService.create(req.body);
      res.status(201).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const posts = await BlogService.getAll();
    res.json(posts);
  }

  static async getById(req: Request, res: Response) {
    const post = await BlogService.getById(req.params.id);
    res.json(post);
  }
}