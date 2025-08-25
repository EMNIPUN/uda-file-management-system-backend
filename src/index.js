import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";


const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://uda-file-management-system-frontend-git-main-emnipuns-projects.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.use("/", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

