import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

try {
  const result = await cloudinary.uploader.upload("test.jpeg", {
    folder: "QuickDine",
  });

  console.log("UPLOAD SUCCESSFUL:");
  console.log(result.secure_url);
} catch (error) {
  console.error("UPLOAD FAILED:");
  console.error(error);
}
