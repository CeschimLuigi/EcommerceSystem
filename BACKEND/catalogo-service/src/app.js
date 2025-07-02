import getRoute from "./routes/getRoute.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app= express();
app.use(cors({
    origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET'],
    credentials: true,
}));



app.use(getRoute);

export default app;