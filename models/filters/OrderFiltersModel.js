import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    Status: {
      type: String,
    },
    DateStart: {
      type: String,
    },
    DateEnd: {
      type: String,
    },
  },
  { _id: false }
);

export const OrderFiltersModel = mongoose.model("OderFiltersModel", schema);
