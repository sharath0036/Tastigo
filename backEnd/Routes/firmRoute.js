import express from "express";
const Router = express.Router();

import { upload, addFirm, deleteById } from "../Controllers/firmController.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

Router.post("/addFirm", verifyToken, upload.single("image"), addFirm);

Router.get("/uploads/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent("Content-Type", 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});

Router.delete("/deleteFirm/:firmId", deleteById)

export { Router };
