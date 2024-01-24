import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(`Error ${error.message}`);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use("/api/user", userRoutes);
