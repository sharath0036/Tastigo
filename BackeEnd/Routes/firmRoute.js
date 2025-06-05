import express from "express";
let Router = express.Router();
import { addFirm } from "../Controllers/firmController.js";
import {verifyToken} from "../Middlewares/verifyToken.js";

Router.post("/addFirm", verifyToken, addFirm);

export { Router };