import Vendor from "../Models/Vendor.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const VenderRegister = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        const vendorFind = await Vendor.findOne({ email });

        if (vendorFind) {
            return res.status(400).json({ message: "Vendor already exists" });
        }

        let venderPassword = await bcrypt.hash(password, 10);

        let vendor = new Vendor({
            username,
            email,
            password: venderPassword
        })

        await vendor.save()
        res.status(201).json({ message: "Vendor created successfully" })

    } catch (error) {
        res.status(401).json({ message: `internal server error ${error}` })
    }
}

const VendorShowAll = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: `Error fetching vendors: ${error.message}` });
    }
}

const VendorLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const vendor = await Vendor.findOne({ email });

        if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = Jwt.sign({ id: vendor._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.setHeader("token", token);

        res.cookie("token", token, {
            maxAge: 900000,
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
        });
        const vendorId = vendor._id;
        return res.status(200).json({
            message: "Login successful",
            token: token,
            vendorId
        });

    } catch (error) {
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};


const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find().populate('firm');
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: `Error fetching vendors: ${error.message}` });
    }
}

const getVendorById = async (req, res) => {
    const venderId = req.params.id;
    try {
        const vendor = await Vendor.findById(venderId).populate('firm');
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        const vendorFirmId = vendor.firm[0]._id;
        res.status(200).json({ vendor, venderId, vendorFirmId });
    } catch (error) {
        res.status(500).json({ message: `Error fetching vendor: ${error.message}` });
    }
}
export { VenderRegister, VendorShowAll, VendorLogin, getAllVendors, getVendorById };