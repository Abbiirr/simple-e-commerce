import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config({ path: path.resolve("../.env") });

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.SERVER_PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
