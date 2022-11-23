import * as CategoryRepo from "../repositories/CategoryRepo.js";
import { CategoryFiltersModel } from "../models/filters/CategoryFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersCategory = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["Name"];
  const ignoreCases = ["Status"];
  const categoryFilters = new CategoryFiltersModel(filters);
  const query = {};
  let skipCategories = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    categoryFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    categoryFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), categoryFilters);

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipCategories = (filters.page - 1) * PAGE_SIZE;
  }

  return await CategoryRepo.getFiltersCategory(
    query,
    skipCategories,
    PAGE_SIZE
  );
};

export const getCategoryById = async (_id) => {
  return await CategoryRepo.getCategoryById(_id);
};

export const addCategory = async (Category) => {
  return await CategoryRepo.addCategory(Category);
};

export const updateCategory = async (_id, Category) => {
  return await CategoryRepo.updateCategory(_id, Category);
  //return getCategoryById(_id);
};

export const deleteCategory = async (_id) => {
  await CategoryRepo.deleteCategory(_id);
};
