// src/modules/message/services/message.service.ts

import { prisma } from "../../../prisma/client";

export class MessageService {
  static async send(
    senderId: string,
    content: string
  ) {
    return prisma.message.create({
      data: {
        senderId,
        content,
      },
    });
  }

  static async getAll() {
    return prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        sender: true,
      },
    });
  }

  static async getRecentMessages() {
    return prisma.message.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        sender: true,
      },
    });
  }
}