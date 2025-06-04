import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send(`Hello`)
});

mongoose.connect(process.env.URL)
.then(() => console.log("Database Connected"))
.catch((err)=>console.log(err))

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
    console.log(`Open http://localhost:${port}`);
})