// src/modules/product/services/product.service.ts

import { prisma } from "../../../prisma/client";

export class ProductService {
  static async create(data: any) {
    console.log(
      "PRODUCT DATA RECEIVED:",
      data
    );

    return await prisma.product.create({
      data: {
        title: data.title,
        description: data.description,
        story: data.story,
        price: Number(data.price),
        imageUrl: data.imageUrl,
        stock: Number(data.stock),
      },
    });
  }

  static async getAll() {
    return await prisma.product.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getById(id: string) {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}