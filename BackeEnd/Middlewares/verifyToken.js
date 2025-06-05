import Vender from "../Models/Vendor.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        const vendor = await Vender.findById(decoded.vendorId);
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        req.vendorId = vendor._id;
        next();

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }

}

export { verifyToken }