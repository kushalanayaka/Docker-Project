import { Request, Response } from "express";
import { BlogService } from "../services/blog.service";

export class BlogController {
  static async create(
    req: Request,
    res: Response
  ) {
    try {
      const post =
        await BlogService.create(
          req.body
        );

      return res.status(201).json(post);

    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  static async getAll(
    req: Request,
    res: Response
  ) {
    try {
      const posts =
        await BlogService.getAll();

      return res.json(posts);

    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getById(
    req: any,
    res: Response
  ) {
    try {
      const post =
        await BlogService.getById(
          req.params.id
        );

      if (!post) {
        return res.status(404).json({
          message: "Blog post not found",
        });
      }

      return res.json(post);

    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async update(
    req: any,
    res: Response
  ) {
    try {
      const post =
        await BlogService.update(
          req.params.id,
          req.body
        );

      return res.json(post);

    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async delete(
    req: any,
    res: Response
  ) {
    try {
      await BlogService.delete(
        req.params.id
      );

      return res.json({
        message:
          "Blog deleted successfully",
      });

    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}