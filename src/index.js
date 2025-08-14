import "dotenv/config";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";


const app = express();
app.use(express.json());

app.use("/api/files", fileRouter);


connectDB();

export default app;

