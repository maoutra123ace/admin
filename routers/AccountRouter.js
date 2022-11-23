import express from "express";
import * as AccountController from "../controllers/AccountController.js";

const AccountRouter = express.Router();

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
