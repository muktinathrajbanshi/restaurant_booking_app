import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

console.log("Cloudinary URL exists:", !!process.env.CLOUDINARY_URL);

try {
  const result = await cloudinary.api.ping();

  console.log("Cloudinary connection successful:");
  console.log(result);
} catch (error) {
  console.error("Cloudinary connection failed:");
  console.error(error);
}
