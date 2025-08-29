import "dotenv/config";
import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";

const app = express();
app.use(express.json());

// Allow multiple origins and Vercel preview domains
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests or same-origin
    if (!origin) return callback(null, true);

    // Explicitly allowed origins from env (comma-separated)
    if (allowedOrigins.includes(origin)) return callback(null, true);

    // Allow Vercel preview deployments: https://<project>-git-<branch>-<user>.vercel.app
    const vercelPreviewRegex = /^https?:\/\/[\w-]+-git-[\w-]+\.[\w-]+\.vercel\.app$/i;
    const vercelAppRegex = /^https?:\/\/.+\.vercel\.app$/i; // fallback for other vercel subdomains
    if (vercelPreviewRegex.test(origin) || vercelAppRegex.test(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use("/api/file", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


