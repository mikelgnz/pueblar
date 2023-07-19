import mongoose, { Document, Schema } from "mongoose";

export interface NewsArticle_Interface extends Document {
  title: string;
  body: string;
  link: string;
  pic: string;
  tags: string[];
  provinces: string[];
}

const schema = new Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: true },
    link: { type: String, require: true },
    pic: { type: String, require: true },
    provinces: { type: [String], require: true },
    tags: { type: [String], require: true },
  },
  { timestamps: true }
);

export const NewsArticleModel = mongoose.model<NewsArticle_Interface>(
  "news",
  schema
);
