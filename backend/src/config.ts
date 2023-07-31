import dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT);
export const DB_URI =
  process.env.DB_URI ?? "mongodb://127.0.0.1:27017/pueblar/news";
  process.env.DB_URI ?? "mongodb://127.0.0.1:27017/pueblar/houses";
