/*const Express = require("express");
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const app = Express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");*/

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/userRoutes.mjs";
import productRoutes from "./routes/productRoutes.mjs";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;
const MONGUURL = process.env.MONGO_URI;
const app = express();

app.use(express.json()); //to accept json from user
app.use(cors()); // allow requests from all

mongoose
  .connect(MONGUURL)
  .then(() => {
    console.log("Database Connected".blue);

    app.get("/", (req, res) => {
      res.send("API is running");
    });

    app.use("/api/user", userRoutes);

    app.use("/api/product", productRoutes);

    app.use(notFound);
    app.use(errorHandler);

    app.listen(5000, () => {
      console.log(`Server running on port: ${PORT}`.yellow.bold);
    });
  })
  .catch((error) => console.log(error));
