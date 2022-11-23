import * as ProductSvc from "../services/ProductSvc.js";

export const getFiltersProduct = async (req, res) => {
  try {
    const nearlyRight = ["Name"];
    const ignoreCases = ["Status"];
    const products = await ProductSvc.getFiltersProduct(
      req.query,
      nearlyRight,
      ignoreCases
    );

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductSvc.getProductById(req.params);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

// export const getProductByOffsetLimit = async (req, res) => {
//   try {
//     const { offset, limit } = req.params;

//     const product = await ProductSvc.getProductByOffsetLimit(offset, limit);
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({
//       Message: "Fail",
//       Error: error,
//     });
//   }
// };

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await ProductSvc.addProduct(product);

    return res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = req.body;

    await ProductSvc.updateProduct(_id, product);

    const productUpdate = await ProductSvc.getProductById(_id);

    return res.status(200).json(productUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;

    await ProductSvc.deleteProduct(_id);

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
