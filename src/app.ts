import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import masterRoutes from "./routes/masterRoutes";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
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

// API endpoint to forward the image from the given URL
app.get("/forward", async (req: any, res: any) => {
  const url = req.url.replace("/forward?url=", "");

  try {
    // Fetch the image from the provided URL
    const response = await axios.get(url, { responseType: "arraybuffer" });

    // Set the appropriate content-type for the image
    res.set("Content-Type", response.headers["content-type"]);
    res.send(response.data); // Forward the image as the response
  } catch (error) {
    console.error("Error fetching image:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch the image from the provided URL" });
  }
});

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
