import "dotenv/config";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Restaurant } from "./models/Restaurant.js";
import { Booking } from "./models/Booking.js";

const MONGO_URI = process.env.MONGODB_URI || "";

const seedData = async () => {
  try {
    console.log("Connecting to database for seeding...");

    await mongoose.connect(MONGO_URI);

    console.log("Database connected. Clearing existing collections...");

    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await Booking.deleteMany({});
  } catch (error: any) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
