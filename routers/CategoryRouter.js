import express from "express";
import * as CategoryController from "../controllers/CategoryController.js";

const CategoryRouter = express.Router();

//==================Get==================
CategoryRouter.get(
  "/categories/getCategoriesFilters",
  CategoryController.getFiltersCategory
);

CategoryRouter.get(
  "/categories/getCategoryById/:_id",
  CategoryController.getCategoryById
);

//==================Post==================
CategoryRouter.post("/categories/addCategory", CategoryController.addCategory);

//==================Put==================
CategoryRouter.put(
  "/categories/updateCategory/:_id",
  CategoryController.updateCategory
);

//==================Delete==================
CategoryRouter.delete(
  "/categories/deleteCategory/:_id",
  CategoryController.deleteCategory
);

export default CategoryRouter;
