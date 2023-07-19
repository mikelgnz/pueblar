import { IngredientInterface } from "./ingredient";

export interface RecipesInterface {
  _id: string;
  name: string;
  instructions: string;
  img: string;
  ingredients?: IngredientInterface[];
}

export interface RecipesDetailsInterface {
  _id: string;
  name: string;
  instructions: string;
  img: string;
  ingredients: IngredientInterface[];
}
