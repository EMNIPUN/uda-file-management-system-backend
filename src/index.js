import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";

const app = express();
app.use(express.json());

// ✅ fallback to allowed origins if env missing
const allowedOrigins = [
  "http://localhost:3000",
  "https://uda-file-management-system-frontend.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin === process.env.CORS_ORIGIN) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ handle preflight requests
app.options("*", cors(corsOptions));

app.use("/", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
