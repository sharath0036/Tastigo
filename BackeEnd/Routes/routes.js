import express from "express";
import { Router as vendorRoutes } from "./vendorRoutes.js";
import { Router as firmRoute } from "./firmRoute.js";
import bodyParser from "body-parser";

let Router = express.Router();
Router.use(bodyParser.json());
Router.use("/vender", vendorRoutes);
Router.use("/Firm", firmRoute)

export { Router };