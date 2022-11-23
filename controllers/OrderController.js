import * as OrderSvc from "../services/OrderSvc.js";
import moment from "moment";

export const getFiltersOrder = async (req, res) => {
  try {
    const order = await OrderSvc.getFiltersOrder(req.query);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getOrderByAccountId = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderByAccountId(req.params);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderById(req.params);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = await OrderSvc.addOrder(order);

    return res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const payment = async (req, res) => {
  try {
    req.storeAccount = {
      type: "GET_USER",
      payload: {
        user: {
          _id: "63728369faf96f022f962f71",
          name: "Trương Nhật Vy",
          email: "truongnhatvy78@gmail.com",
          address:
            "136 To Hien Thanh Street, Ward 14, District 10,Ho Chi Minh City",
          phone: "0838113670",
          role: "1",
          avatar:
            "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg",
          createAt: "",
          updateAt: "",
          __v: 0,
        },
        isAdmin: true,
      },
    };

    req.storeCart = [
      {
        CategoryId: "6363e76350420980842dfd48",
        Image: "tuf_dash_f15_fx516pc.png",
        Name: "Laptop Gaming Asus TUF Dash F15 FX516PC HN002T",
        Price: 25990000,
        Quantity: 100,
        cartQuantity: 2,
        _id: "6363f9e950420980842dfd6e",
      },
      {
        CategoryId: "6363e76350420980842dfd48",
        Image: "bkp_zenbook_ux425_product_photo_1a_lilac_mist_05_numberpad.jpg",
        Name: "Laptop Asus Zenbook UX425EA KI818T",
        Price: 25490000,
        Quantity: 100,
        cartQuantity: 3,
        _id: "6363f9e950420980842dfd6f",
      },
      {
        CategoryId: "6363e76350420980842dfd48",
        Image:
          "zenbook_duo_14_ux482_product_photo_1b_celestial_blue_05_2000x2000_f12fa0ce7cf647cab4273a64df4a36e8.jpg",
        Name: "Laptop Asus Zenbook Duo UX482EA KA081T",
        Price: 32490000,
        Quantity: 100,
        cartQuantity: 1,
        _id: "6363f9e950420980842dfd70",
      },
    ];

    await OrderSvc.payment(req.storeAccount, req.storeCart);

    return res.status(200).json({ Message: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = req.body;

    await OrderSvc.updateOrder(_id, order);

    const orderUpdate = await OrderSvc.getOrderById(_id);

    return res.status(200).json(orderUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
export const deleteOrder = async (req, res) => {
  try {
    const { _id } = req.params;

    await OrderSvc.deleteOrder(_id);

    return res.status(200).json({ Message: "ok" });
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
