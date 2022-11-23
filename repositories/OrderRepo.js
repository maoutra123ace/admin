import { OrderModel } from "../models/data/OrderModel.js";

export const getFiltersOrder = async (query, skipProducts, PAGE_SIZE) => {
  if (skipProducts >= 0) {
    return await OrderModel.find(query).skip(skipProducts).limit(PAGE_SIZE);
  }

  return await OrderModel.find(query);
};

export const getOrderByAccountId = async (_id) => {
  return await OrderModel.find({ AccountId: _id });
};

export const getOrderById = async (_id) => {
  return await OrderModel.findById(_id);
};

export const addOrder = async (order) => {
  
  return await OrderModel.create(order);
};

export const payment = async (cart) => {
  return await OrderModel.findById(cart);
};

export const updateOrder = async (_id, order) => {
  return await OrderModel.findByIdAndUpdate(_id, order);
};

export const deleteOrder = async (_id) => {
  await OrderModel.findByIdAndDelete(_id);
};
