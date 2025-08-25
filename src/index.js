import "dotenv/config";
import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};
app.use(cors(corsOptions));

app.use("/", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


