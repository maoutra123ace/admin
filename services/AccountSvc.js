import * as AccountRepo from "../repositories/AccountRepo.js";
import { AccountFiltersModel } from "../models/filters/AccountFiltersModel.js";
import { AccountModel } from "../models/data/AccountModel.js";
import bcrypt from "bcrypt";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersAccount = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["name", "email", "address", "phone"];
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

export const handleUserLogin = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let user = await AccountModel.findOne({ email: email })
      if (user) {
        let check = bcrypt.compareSync(password, user.password)
        if (check) {
          userData.errCode = 0
          userData.errMessage = 'Password is correct'
          userData.user = user
          userData.token = "joihreoyqewq8q8y4219834213"
        } else {
          userData.errCode = 2
          userData.errMessage = 'Wrong password'
        }
      } else {
        userData.errCode = 1
        userData.errMessage = 'User is not found'
      }

      resolve(userData)
    } catch (e) {
      reject(e);
    }
  })
};

export const handleUserSignup = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let isExist = await AccountModel.findOne({ email: data.emailSignup })
      if (!isExist) {
        let hashPasswordFromBcrypt = await Utils.hashPassword(data.passwordSignup);
        await AccountModel.create({
          email: data.emailSignup,
          password: hashPasswordFromBcrypt,
          name: "Customer",
          phone: "1111111",
          address: "123",
          role: 0,
          avatar: 'https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg',
        })

        userData.errCode = 0
        userData.errMessage = `Signup success`
        userData.user = {
          email: data.emailSignup,
          password: hashPasswordFromBcrypt,
          name: "Customer",
          phone: "1111111",
          address: "123",
          role: 0,
          avatar: 'https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg',
        }
      } else {
        userData.errCode = 3
        userData.errMessage = `Your email is exist`
      }

      resolve(userData)
    } catch (e) {
      reject(e);
    }
  })
}

export const addAccount = async (account) => {
  account["password"] = await Utils.hashPassword(account["password"]);

  return await AccountRepo.addAccount(account);
};

export const updateAccount = async (_id, Account) => {
  // let check = bcrypt.compareSync(Account["password"], user.password)
  if (Account["password"]) {
    Account["password"] = await Utils.hashPassword(Account["password"]);
    return await AccountRepo.updateAccount(_id, Account);
  } else {
    return await AccountRepo.updateAccount(_id, Account);
  }
  //return getAccountById(_id);
};

export const deleteAccount = async (_id) => {
  await AccountRepo.deleteAccount(_id);
};
