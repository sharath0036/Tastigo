import express from "express";
const Router = express.Router();

import { upload, addFirm } from "../Controllers/firmController.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

Router.post("/addFirm", verifyToken, upload.single("image"), addFirm);

export { Router };
