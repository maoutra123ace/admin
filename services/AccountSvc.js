import * as AccountRepo from "../repositories/AccountRepo.js";
import { AccountFiltersModel } from "../models/filters/AccountFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersAccount = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["name", "email","address","phone"];
  const ignoreCases = ["role"];
  const accountFilters = new AccountFiltersModel(filters);
  const query = {};
  let skipCategories = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    accountFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    accountFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), accountFilters);

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipCategories = (filters.page - 1) * PAGE_SIZE;
  }

  return await AccountRepo.getFiltersAccount(query, skipCategories, PAGE_SIZE);
};

export const getAccountById = async (_id) => {
  return await AccountRepo.getAccountById(_id);
};

export const addAccount = async (account) => {
  account["password"] = await Utils.hashPassword(account["password"]);

  return await AccountRepo.addAccount(account);
};

export const updateAccount = async (_id, Account) => {
  return await AccountRepo.updateAccount(_id, Account);
  //return getAccountById(_id);
};

export const deleteAccount = async (_id) => {
  await AccountRepo.deleteAccount(_id);
};
