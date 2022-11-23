import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { _id: false }
);

export const AccountFiltersModel = mongoose.model(
  "AccountFiltersModel",
  schema
);
