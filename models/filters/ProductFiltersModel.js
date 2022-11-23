import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    CategoryId: {
      type: Schema.Types.ObjectId,
    },
    Name: {
      type: String,
    },
    PriceStart: {
      type: Number,
    },
    PriceEnd: {
      type: Number,
    },
    Status: {
      type: String,
    },
  },
  { _id: false }
);

//use: this.regexNearlyRight(value) ; Outputs: /value/iu
// schema.methods.regexNearlyRight = function (value) {
//   return new RegExp(value, "iu");
// };

// schema.methods.regexExactly = function (value) {
//   return new RegExp("^" + value + "$", "iu");
// };

export const ProductFiltersModel = mongoose.model(
  "ProductFiltersModel",
  schema
);
