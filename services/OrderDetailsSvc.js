import * as OrderDetailsRepo from "../repositories/OrderDetailsRepo.js";

export const getOrderDetailsByOrderId = async (_id) => {
  return await OrderDetailsRepo.getOrderDetailsByOrderId(_id);
};

export const addOrderDetails = async (orderDetails) => {
  return await OrderDetailsRepo.addOrderDetails(orderDetails);
};

export const deleteOrderDetailsByOrderId = async (orderId) => {
  await OrderDetailsRepo.deleteOrderDetailsByOrderId(orderId);
};
