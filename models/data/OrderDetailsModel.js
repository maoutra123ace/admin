import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    OrderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    UnitPrice: {
      type: Number,
      require: true,
    },
    Quantity: {
      type: Number,
      require: true,
    },
    Total: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "orderDetails",
  }
);

export const OrderDetailsModel = mongoose.model("orderDetails", schema);
