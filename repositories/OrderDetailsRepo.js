import { OrderDetailsModel } from "../models/data/OrderDetailsModel.js";

export const getOrderDetailsByOrderId = async (_id) => {
  return await OrderDetailsModel.find({ OrderId: _id });
};

export const addOrderDetails = async (orderDetails) => {
  return await OrderDetailsModel.create(orderDetails);
};

export const deleteOrderDetailsByOrderId = async (orderId) => {
  await OrderDetailsModel.deleteMany({ OrderId: orderId });
};
