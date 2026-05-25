// src/modules/order/services/order.service.ts
import { prisma } from "../../../prisma/client";
import { transporter } from "../../../utils/mail";

export class OrderService {
  static async create(data: any) {
    const order = await prisma.order.create({
      data,
      include: {
        product: true,
      },
    });

    // Send email to artist
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ARTIST_EMAIL,
      subject: "🎨 New Artwork Request",
      html: `
        <h2>New Artwork Request</h2>

        <p><strong>Customer:</strong> ${order.customerName}</p>
        <p><strong>Email:</strong> ${order.customerEmail}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>

        <p><strong>Artwork:</strong> ${order.product.title}</p>

        <p><strong>Message:</strong></p>
        <p>${order.message || "No message"}</p>
      `,
    });

    return order;
  }

  static async getAll() {
    return prisma.order.findMany({
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}