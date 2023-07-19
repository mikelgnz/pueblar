import mongoose, { Document, Schema } from "mongoose";
import { IngredientModel } from "./Ingredient";

export interface RecipeInterface extends Document {
  name: string;
  instructions: string;
  img: string;
}

const schema = new Schema(
  {
    name: { type: String, require: true },
    instructions: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

export const RecipeModel = mongoose.model<RecipeInterface>("recipe", schema);

export const getIngredientsFromRecipe = async (recipeId: string) => {
  const ingredients = await IngredientModel.find({ recipe: recipeId }).lean();
  return ingredients;
};
