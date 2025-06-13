import express from "express";
import { Router as vendorRoutes } from "./vendorRoutes.js";
import { Router as firmRoute } from "./firmRoute.js";
import bodyParser from "body-parser";
import { Router as productRoute } from "./productRoute.js";

let Router = express.Router();
Router.use(bodyParser.json());

Router.use("/vender", vendorRoutes);
Router.use("/Firm", firmRoute)
Router.use("/Product", productRoute);

export { Router };