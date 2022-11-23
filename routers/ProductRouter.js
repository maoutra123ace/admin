import express from "express";
import * as ProductController from "../controllers/ProductController.js";

const ProductRouter = express.Router();

//==================Get==================
ProductRouter.get(
  "/products/getProductsFilters",
  ProductController.getFiltersProduct
);

// ProductRouter.get(
//   "/products/getProductByOffsetLimit/:offset/:limit",
//   ProductController.getProductByOffsetLimit
// );

ProductRouter.get(
  "/products/getProductById/:_id",
  ProductController.getProductById
);

//==================Post==================
ProductRouter.post("/products/addProduct", ProductController.addProduct);

//==================Put==================
ProductRouter.put(
  "/products/updateProduct/:_id",
  ProductController.updateProduct
);

//==================Delete==================
ProductRouter.delete(
  "/products/deleteProduct/:_id",
  ProductController.deleteProduct
);

export default ProductRouter;
