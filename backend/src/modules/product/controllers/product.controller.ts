// src/modules/product/controllers/product.controller.ts
import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  static async create(req: Request, res: Response) {
    try {
      const product = await ProductService.create(req.body);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const products = await ProductService.getAll();
    res.json(products);
  }

  static async getById(req: Request, res: Response) {
    const product = await ProductService.getById(req.params.id);
    res.json(product);
  }
}