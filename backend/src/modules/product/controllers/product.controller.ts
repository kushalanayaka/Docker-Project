// src/modules/product/controllers/product.controller.ts

import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  static async create(
    req: Request,
    res: Response
  ) {
    try {
      console.log(
        "CREATE PRODUCT BODY:",
        req.body
      );

      const product =
        await ProductService.create(
          req.body
        );

      return res.status(201).json(product);

    } catch (error: any) {
      console.error(
        "PRODUCT CREATE ERROR:"
      );

      console.error(error);

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
      const products =
        await ProductService.getAll();

      return res.json(products);

    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getById(
    req: Request,
    res: Response
  ) {
    try {
      const product =
        await ProductService.getById(
          req.params.id
        );

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      return res.json(product);

    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        message: error.message,
      });
    }
  }
}