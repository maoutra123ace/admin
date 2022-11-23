import { AccountModel } from "../models/data/AccountModel.js";

export const getFiltersAccount = async (query, skipAccounts, PAGE_SIZE) => {
  if (skipAccounts >= 0) {
    return await AccountModel.find(query).skip(skipAccounts).limit(PAGE_SIZE);
  }

  return await AccountModel.find(query);
};

export const getAccountById = async (_id) => {
  return await AccountModel.findById(_id);
};

export const addAccount = async (account) => {
  return await AccountModel.create(account);
};

export const updateAccount = async (_id, account) => {
  return await AccountModel.findByIdAndUpdate(_id, account);
};

export const deleteAccount = async (_id) => {
  await AccountModel.findByIdAndDelete(_id);
};
