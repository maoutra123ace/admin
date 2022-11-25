import * as OrderDetailsSvc from "../services/OrderDetailsSvc.js";
import * as ProductsSvc from '../services/ProductSvc.js';

export const getOrderDetailsByOrderId = async (req, res) => {
  try {
    const orderDetails = await OrderDetailsSvc.getOrderDetailsByOrderId(req.params);
    const t = await ProductsSvc.getProductById(orderDetails[0].ProductId);
    console.log(orderDetails[0].Products);
    console.log(t);
    return res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addOrderDetails = async (req, res) => {
  try {
    const orderDetails = req.body;
    const newOrderDetails = await OrderDetailsSvc.addOrderDetails(orderDetails);

    return res.status(200).json(newOrderDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteOrderDetailsByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;

    await OrderDetailsSvc.deleteOrderDetailsByOrderId(orderId);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
