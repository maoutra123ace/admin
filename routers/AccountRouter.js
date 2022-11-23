import express from "express";
import * as AccountController from "../controllers/AccountController.js";

const AccountRouter = express.Router();

//=================Login
AccountRouter.post(
  "/accounts/login",
  AccountController.login
);

//=================Register
AccountRouter.post(
  "/accounts/register",
  AccountController.register
);

//==================Get==================
AccountRouter.get(
  "/accounts/getAccountFilters",
  AccountController.getFiltersAccount
);

AccountRouter.get(
  "/accounts/getAccountById/:_id",
  AccountController.getAccountById
);

//==================Post==================
AccountRouter.post("/accounts/addAccount", AccountController.addAccount);

//==================Put==================
AccountRouter.put(
  "/accounts/updateAccount/:_id",
  AccountController.updateAccount
);

//==================Delete==================
AccountRouter.delete(
  "/accounts/deleteAccount/:_id",
  AccountController.deleteAccount
);

export default AccountRouter;
