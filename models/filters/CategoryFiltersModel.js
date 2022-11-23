import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Status: {
      type: String,
    },
  },
  { _id: false }
);

export const CategoryFiltersModel = mongoose.model(
  "CategoryFiltersModel",
  schema
);
