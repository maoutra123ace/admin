import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name !"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email !"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password !"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone !"],
    },
    address: {
      type: String,
      required: [true, "Please enter your address !"],
    },
    role: {
      type: String,
      default: "0", // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg",
    },
  },
  {
    collection: "accounts",
  }
);

export const AccountModel = mongoose.model("accounts", schema);
