import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import masterRoutes from "./routes/masterRoutes";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Middleware
app.use(express.json());

// Health Check Endpoint
app.get("/", (req, res) => {
  res.send("gru_chang_thai_service is running");
});

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
