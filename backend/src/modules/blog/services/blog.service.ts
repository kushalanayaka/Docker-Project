import { prisma } from "../../../prisma/client";

export class BlogService {
  static async create(data: any) {
    return prisma.blogPost.create({
      data,
    });
  }

  static async getAll() {
    return prisma.blogPost.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.blogPost.findUnique({
      where: {
        id,
      },
      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  static async update(
    id: string,
    data: any
  ) {
    return prisma.blogPost.update({
      where: {
        id,
      },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.blogPost.delete({
      where: {
        id,
      },
    });
  }
}