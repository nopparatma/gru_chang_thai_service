import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import masterRoutes from "./routes/masterRoutes";
import { generateAccessToken, generateRefreshToken } from "./utils/tokenUtils";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Middleware
app.use(express.json());

// Health Check Endpoint
app.get("/", (req, res) => {
  res.send("gru_chang_thai_service is running");
});

// Temporary token generation route (For Testing Only)
// app.post("/v1/token/generate", (req: any, res: any) => {
//   const { userId } = req.body;
//   if (!userId) return res.status(400).json({ message: "userId is required" });

//   const accessToken = generateAccessToken({ userId });
//   const refreshToken = generateRefreshToken({ userId });

//   res.json({ accessToken, refreshToken });
// });

// routes
app.use("/v1/product", productRoutes);
app.use("/v1/master", masterRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI ?? "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server is running at PORT : ${port}`);
});

export default app;
