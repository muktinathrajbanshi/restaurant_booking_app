import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
