import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Router as routes } from "./Routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// Enable CORS FIRST
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json()); // Make sure JSON parsing is enabled before routes
app.use(cookieParser());
// Root route
app.get("/", (req, res) => {
    res.send("Hello");
});

// Route file (this now has CORS + JSON support)
app.use("/", routes);

// MongoDB connection
mongoose.connect(process.env.URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

// Start server
app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
    console.log(`Open http://localhost:${port}`);
});
