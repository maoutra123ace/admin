import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    CategoryId: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    Name: {
      type: String,
      require: true,
    },
    Image: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    Price: {
      type: Number,
      require: true,
    },
    Quantity: {
      type: Number,
      require: true,
    },
    Status: {
      type: String,
      require: true,
    },
  },
  { collection: "products" }
);

export const ProductModel = mongoose.model("products", schema);

// Convert type db
// db.products.find({}).forEach(function (doc) {
//   db.products.updateOne(
//     {
//       _id: doc._id,
//     },
//     {
//       $set: {
//         BrandId: ObjectId(doc.BrandId),
//         CategoryId: ObjectId(doc.CategoryId),
//       },
//     }
//   );
// });
