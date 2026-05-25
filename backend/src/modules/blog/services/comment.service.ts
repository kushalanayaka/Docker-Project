// src/modules/blog/services/comment.service.ts
import { prisma } from "../../../prisma/client";

export class CommentService {
  static async create(userId: string, postId: string, content: string) {
    return prisma.comment.create({
      data: {
        userId,
        postId,
        content,
      },
    });
  }
}