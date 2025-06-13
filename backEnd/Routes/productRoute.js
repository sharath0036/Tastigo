import express from "express";
const Router = express.Router();

import { upload, addProduct, getProductsById, deleteById } from "../Controllers/produtController.js";

Router.post("/addProducts/:firmId", upload.single("image"), addProduct)
Router.get("/getProducts/:firmId", getProductsById);

Router.get("/uploads/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent("Content-Type", 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});

Router.delete("/deleteProduct/:productId", deleteById)

export { Router };
