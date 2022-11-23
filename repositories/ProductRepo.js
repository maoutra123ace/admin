import { ProductModel } from "../models/data/ProductModel.js";

export const getFiltersProduct = async (query, skipProducts, PAGE_SIZE) => {
  if (skipProducts >= 0) {
    return await ProductModel.find(query).skip(skipProducts).limit(PAGE_SIZE);
  }

  return await ProductModel.find(query);
};

export const getProductById = async (_id) => {
  return await ProductModel.findById(_id);
};

// export const getProductByOffsetLimit = async (offset, limit) => {
//   return await ProductModel.find().skip(offset).limit(limit);
// };

export const addProduct = async (product) => {
  return await ProductModel.create(product);
};

export const updateProduct = async (_id, product) => {
  return await ProductModel.findByIdAndUpdate(_id, product);
};

export const deleteProduct = async (_id) => {
  await ProductModel.findByIdAndDelete(_id);
};
