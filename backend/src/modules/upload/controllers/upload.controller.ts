import { Request, Response } from "express";
import cloudinary from "../../../config/cloudinary";

export class UploadController {
  static async uploadImage(
    req: Request,
    res: Response
  ) {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }

      const result =
        await cloudinary.uploader.upload(
          req.file.path,
          {
            folder: "artist-platform",
          }
        );

      return res.status(200).json({
        imageUrl: result.secure_url,
      });

    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}