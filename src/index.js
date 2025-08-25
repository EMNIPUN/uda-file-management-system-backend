import "dotenv/config";
import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://uda-file-management-system-frontend.vercel.app" // production frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


