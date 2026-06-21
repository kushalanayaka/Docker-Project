import { prisma } from "../../../prisma/client";

export class DashboardService {
  static async getStats() {
    const [
      products,
      blogs,
      orders,
      messages,
    ] = await Promise.all([
      prisma.product.count(),
      prisma.blogPost.count(),
      prisma.order.count(),
      prisma.message.count(),
    ]);

    return {
      products,
      blogs,
      orders,
      messages,
    };
  }

  static async getRecentOrders() {
    return prisma.order.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        product: true,
      },
    });
  }
}