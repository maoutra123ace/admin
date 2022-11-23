import * as ProductRepo from "../repositories/ProductRepo.js";
import { ProductFiltersModel } from "../models/filters/ProductFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersProduct = async (filters, nearlyRight, ignoreCases) => {
  Utils.cleanObject(filters);

  const productFilters = new ProductFiltersModel(filters);
  const query = {};
  let skipProducts = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    productFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    productFilters,
    Utils.regexExactly(),
    "iu"
  );

  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), productFilters);

  if (query["PriceStart"] && query["PriceEnd"]) {
    query["Price"] = {
      $gte: query["PriceStart"],
      $lte: query["PriceEnd"],
    };

    delete query["PriceStart"];
    delete query["PriceEnd"];
  }

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipProducts = (filters.page - 1) * PAGE_SIZE;
  }

  return await ProductRepo.getFiltersProduct(query, skipProducts, PAGE_SIZE);
};

export const getProductById = async (_id) => {
  return await ProductRepo.getProductById(_id);
};

export const getProductByOffsetLimit = async (offset, limit) => {
  offset = Number(offset);
  limit = Number(limit);

  return await ProductRepo.getProductByOffsetLimit(
    offset - 1,
    limit - offset + 1
  );
};

export const addProduct = async (product) => {
  return await ProductRepo.addProduct(product);
};

export const updateProduct = async (_id, product) => {
  return await ProductRepo.updateProduct(_id, product);
  //return getProductById(_id);
};

export const deleteProduct = async (_id) => {
  await ProductRepo.deleteProduct(_id);
};

export const calculationQuantityProduct = async (products, calculation) => {
  for (const item of products) {
    let product = await getProductById(item["ProductId"]);

    if (calculation.localeCompare("plus", undefined, { sensitivity: "accent" }) === 0)
      product.Quantity += item["Quantity"];

    if (calculation.localeCompare("sub", undefined, { sensitivity: "accent" }) === 0)
      product.Quantity -= item["Quantity"];

    await updateProduct(product["_id"], product);
  }
};

export const isNewProduct = async (name) => {
  const filter = {
    Name: name,
  };
  const nearlyRight = ["Name"];

  const product = await getFiltersProduct(filter, nearlyRight, []);

  if (product != null) {
    return true;
  }

  return false;
};
