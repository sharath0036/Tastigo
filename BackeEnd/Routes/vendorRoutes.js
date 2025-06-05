import express from "express";
let Router = express.Router();
import {
    VenderRegister,
    VendorShowAll,
    VendorLogin
}
from "../Controllers/venderController.js";

Router.post("/Register", VenderRegister);
Router.get("/ShowAll", VendorShowAll);
Router.post("/Login", VendorLogin);

export { Router };