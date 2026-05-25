import { Response, NextFunction } from "express";

export const authorize =
  (requiredRole: string) =>
  (req: any, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };