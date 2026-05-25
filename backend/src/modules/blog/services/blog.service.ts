// src/modules/blog/services/blog.service.ts
import { prisma } from "../../../prisma/client";

export class BlogService {
  static async create(data: any) {
    return prisma.blogPost.create({ data });
  }

  static async getAll() {
    return prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      include: {
        comments: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.blogPost.findUnique({
      where: { id },
      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
  }
}