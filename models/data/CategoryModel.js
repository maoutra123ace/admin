import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    Status: {
      type: String,
      require: true,
    },
  },
  {
    collection: "categories",
  }
);

export const CategoryModel = mongoose.model("categories", schema);
