import * as CategorySvc from "../services/CategorySvc.js";

export const getFiltersCategory = async (req, res) => {
  try {
    const categories = await CategorySvc.getFiltersCategory(req.query);

    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await CategorySvc.getCategoryById(req.params);
    return res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = await CategorySvc.addCategory(category);

    return res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { _id } = req.params;
    const category = req.body;

    await CategorySvc.updateCategory(_id, category);

    const CategoryUpdate = await CategorySvc.getCategoryById(_id);

    return res.status(200).json(CategoryUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.params;

    await CategorySvc.deleteCategory(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
