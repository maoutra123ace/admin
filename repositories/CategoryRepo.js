import { CategoryModel } from "../models/data/CategoryModel.js";

export const getFiltersCategory = async (query, skipCategories, PAGE_SIZE) => {
  if (skipCategories >= 0) {
    return await CategoryModel.find(query)
      .skip(skipCategories)
      .limit(PAGE_SIZE);
  }

  return await CategoryModel.find(query);
};

export const getCategoryById = async (_id) => {
  return await CategoryModel.findById(_id);
};

export const addCategory = async (Category) => {
  return await CategoryModel.create(Category);
};

export const updateCategory = async (_id, Category) => {
  return await CategoryModel.findByIdAndUpdate(_id, Category);
};

export const deleteCategory = async (_id) => {
  await CategoryModel.findByIdAndDelete(_id);
};
