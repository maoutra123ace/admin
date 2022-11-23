import express from "express";
import * as OrderController from "../controllers/OrderController.js";

const OrderRouter = express.Router();

//==================Get==================
OrderRouter.get("/orders/getOrderFilters", OrderController.getFiltersOrder);

OrderRouter.get(
  "/orders/getOrderByAccountId/:_id",
  OrderController.getOrderByAccountId
);

OrderRouter.get("/orders/getOrderById/:_id", OrderController.getOrderById);

//==================Post==================
OrderRouter.post("/orders/addOrder", OrderController.addOrder);

OrderRouter.post("/orders/payment", OrderController.payment);
//==================Put==================
OrderRouter.put("/orders/updateOrder/:_id", OrderController.updateOrder);

//==================Delete==================
OrderRouter.delete("/orders/deleteOrder/:_id", OrderController.deleteOrder);
export default OrderRouter;
