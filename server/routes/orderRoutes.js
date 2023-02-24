import express from "express";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";
import addOrder from "../controllers/orderController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("All orders");
});

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

router.post("/create", addOrder);

export default router;
