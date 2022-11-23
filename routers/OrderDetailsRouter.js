import express from "express";
import * as OrderDetailsController from "../controllers/OrderDetailsController.js";

const OrderDetailsRouter = express.Router();

//==================Get==================
OrderDetailsRouter.get(
  "/orderDetails/getOrderDetailsByOrderId/:_id",
  OrderDetailsController.getOrderDetailsByOrderId
);
//==================Post==================
OrderDetailsRouter.post(
  "/orderDetails/addOrderDetails",
  OrderDetailsController.addOrderDetails
);
//==================Put==================

//==================Delete==================
OrderDetailsRouter.delete(
  "/orderDetails/deleteOrderDetailsByOrderId/:orderId",
  OrderDetailsController.deleteOrderDetailsByOrderId
);
export default OrderDetailsRouter;
