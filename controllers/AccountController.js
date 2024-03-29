import * as AccountSvc from "../services/AccountSvc.js";

export const getFiltersAccount = async (req, res) => {
  try {
    const accounts = await AccountSvc.getFiltersAccount(req.query);

    return res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const account = await AccountSvc.getAccountById(req.params);
    return res.status(200).json(account);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const login = async (req, res) => {
  let email = req.body.email
  let password = req.body.password

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing input'
    })
  }

  let userData = await AccountSvc.handleUserLogin(email, password)

  return res.status(200).json({
    errCode: userData.errCode,
    errMessagessage: userData.errMessage,
    user: userData.user ? userData.user : {},
    token: userData.token ? userData.token : ""
  })
}

export const register = async (req, res) => {
  let email = req.body.emailSignup
  let password = req.body.passwordSignup
  let confirm = req.body.confirm

  if (!email || !password || !confirm) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing input'
    })
  }
  if (password !== confirm) {
    return res.status(500).json({
      errCode: 2,
      message: 'Invalid confirm password'
    })
  }
  let userData = await AccountSvc.handleUserSignup(req.body)
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData.user ? userData.user : {}
  })
}

export const addAccount = async (req, res) => {
  try {
    const account = req.body;
    const newAccount = await AccountSvc.addAccount(account);

    return res.status(200).json(newAccount);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const { _id } = req.params;
    const account = req.body;

    await AccountSvc.updateAccount(_id, account);

    const accountUpdate = await AccountSvc.getAccountById(_id);

    return res.status(200).json(accountUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { _id } = req.params;

    await AccountSvc.deleteAccount(_id);

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
