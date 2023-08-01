import mongoose, { Document, Schema } from "mongoose";

export interface PuebloHouse_Interface extends Document {
  pic: string;
  title: string;
  condition: string;
  price: number;
  for: string;
  area: number;
  comment: string;
  town: string;
  province: string;
  contact: string
}

const schema = new Schema(
  {
    pic: { type: String, require: true },
    title: { type: String, require: true },
    condition: { type: String, require: true },
    price: { type: Number, require: true },
    for: { type: String, require: true },
    area: { type: Number, require: true },
    comment: { type: String, require: true },
    town: { type: String, require: true },
    province: { type: String, require: true },
    contact: { type: String, require: true },
    
  },
  { timestamps: true }
);

export const PuebloHouseModel = mongoose.model<PuebloHouse_Interface>(
  "house",
  schema
);
