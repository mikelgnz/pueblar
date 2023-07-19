import mongoose, { Document, Schema } from "mongoose";
import { RecipeInterface } from "./Recipe";

export interface IngredientInterface extends Document {
  name: string;
  quantity: number;
  img: string;
  recipe: RecipeInterface["_id"];
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    quantity: { type: Number, require: true },
    img: { type: String },
    recipe: { type: Schema.Types.ObjectId, ref: "recipe" },
  },
  { timestamps: true }
);

export const IngredientModel = mongoose.model<IngredientInterface>(
  "ingredient",
  schema
);
