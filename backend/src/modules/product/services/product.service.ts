// src/modules/product/services/product.service.ts
import { prisma } from "../../../prisma/client";

export class ProductService {
  static async create(data: any) {
    return prisma.product.create({ data });
  }

  static async getAll() {
    return prisma.product.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  }
}