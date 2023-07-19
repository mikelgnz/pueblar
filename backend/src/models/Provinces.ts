import mongoose, { Document, Schema } from "mongoose";

export interface TownInterface {
  name: string;
  population: number;
  area: number;
  density: number;

}
export interface ProvinceInterface extends Document {
  name: string;
  population: number;
  density: number;
  area: number;
  capital: string;
  autonomous_community: string;
  towns: TownInterface[];
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    population: { type: Number, require: true },
    density: { type: Number, require: true },
    area: { type: Number, require: true },
    capital: { type: String, require: true },
    autonomous_community: { type: String, require: true },
    towns: { type: [Object], require: true }
  },
  { timestamps: true }
);

export const ProvinceModel = mongoose.model<ProvinceInterface>(
  "provinces",
  schema
);
