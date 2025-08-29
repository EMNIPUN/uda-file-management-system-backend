import "dotenv/config";
import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./infrastructure/db.js";
import fileRouter from "./api/file.js";

const app = express();
app.use(express.json());

// Allow multiple origins via comma-separated CORS_ORIGIN env var
// Additionally support regex patterns via CORS_ORIGIN_REGEX (comma-separated regex strings)
const allowedOrigins = (process.env.CORS_ORIGIN || "").split(",").map(o => o.trim()).filter(Boolean);
const allowedOriginRegexes = (process.env.CORS_ORIGIN_REGEX || "")
    .split(",")
    .map(r => r.trim())
    .filter(Boolean)
    .map(pattern => {
        try {
            return new RegExp(pattern);
        } catch {
            return null;
        }
    })
    .filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow non-browser or same-origin requests (no Origin header)
        if (!origin) return callback(null, true);

        const isExactAllowed = allowedOrigins.includes(origin);
        const isRegexAllowed = allowedOriginRegexes.some(rx => rx.test(origin));

        if (isExactAllowed || isRegexAllowed) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));

app.use("/api/file", fileRouter);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


