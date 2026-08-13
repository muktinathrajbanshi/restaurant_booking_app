import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

    console.log("Creating default users...");

    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash("admin143", salt);
    const userPassword = await bcrypt.hash("user143", salt);
    const ownerPassword = await bcrypt.hash("owner143", salt);

    // Admin
    const adminUser = await User.create({
      name: "Muktinath Rajbanshi",
      email: "muktinathrajbanshi786@gmail.com",
      password: adminPassword,
      phone: "+9779824929410",
      role: "admin",
    });

    // User
    const testUser = await User.create({
      name: "Milan Rajbanshi",
      email: "user123@gmail.com",
      password: userPassword,
      phone: "+9779824929410",
      role: "user",
    });
  } catch (error: any) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
