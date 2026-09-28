import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "../src/config/dbConnection.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Welcome to my Backend Server");
})

app.use("/api/v1/auth", authRoutes)

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`);
    await connectDB(); // Connect to MongoDB when the server starts
})