import express from "express";
import auth from "../middleware/auth.js";
import { createOrder, getUserOrders } from "../controllers/orderController.js";
import admin from "../middleware/admin.js";

const orderRouter = express.Router();

orderRouter.post("/", auth, createOrder);
orderRouter.get("/", auth, getUserOrders);
orderRouter.get("/all", auth, admin, getUserOrders);