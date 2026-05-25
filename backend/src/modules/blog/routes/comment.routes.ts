// src/modules/blog/routes/comment.routes.ts
import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware";
import { CommentService } from "../services/comment.service";

const router = Router();

router.post("/:postId", authenticate, async (req: any, res) => {
  const comment = await CommentService.create(
    req.user.userId,
    req.params.postId,
    req.body.content
  );

  res.json(comment);
});

export default router;