import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    OrderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    Products: [
    {    
      ProductId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      Name: {
        type: String,
        require: true,
      },
      Image: {
        type: String,
        require: true,
      },
      Price: {
        type: Number,
        require: true,
      }
    }
  ],
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
