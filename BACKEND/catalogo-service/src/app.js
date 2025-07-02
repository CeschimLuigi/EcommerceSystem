import getRoute from "./routes/getRoute.js";
import express from "express";
import cors from "cors";

const app= express();
app.use(cors());


app.use(getRoute);

export default app;