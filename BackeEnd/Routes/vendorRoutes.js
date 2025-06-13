import express from "express";
let Router = express.Router();
import {
    VenderRegister,
    VendorShowAll,
    VendorLogin, getAllVendors, getVendorById
}
    from "../Controllers/venderController.js";

Router.post("/Register", VenderRegister);
Router.get("/ShowAll", VendorShowAll);
Router.post("/Login", VendorLogin);
Router.get("/AllVendors", getAllVendors);
Router.get("/getVendorById/:id", getVendorById);
export { Router };