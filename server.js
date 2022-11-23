import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ProductRouter from "./routers/ProductRouter.js";
import AccountRouter from "./routers/AccountRouter.js";
import OrderRouter from "./routers/OrderRouter.js";
import OrderDetailsRouter from "./routers/OrderDetailsRouter.js";
import CategoryRouter from "./routers/CategoryRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
const userName = "traanhvy123";
const password = "traanhvy1";
const databaseName = "ClothesDB";
const cluster = "@clothesdb.jbzcewr.mongodb.net"; 
const URL =
  "mongodb+srv://" + userName + ":" + password + cluster + "/" + databaseName;

//add system services
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.set("json spaces", 2); //formatted Json

//routers
app.use("/", ProductRouter);
app.use("/", AccountRouter);
app.use("/", OrderRouter);
app.use("/", OrderDetailsRouter);
app.use("/", CategoryRouter);

//connect MongoDb
mongoose
  .connect(URL, { useNewUrlParser: true, useUniFiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDb");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connected DB Fail");
  });
