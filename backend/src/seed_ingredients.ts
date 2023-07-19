import mongoose from "mongoose";
import { DB_URI } from "./config";
import { IngredientModel } from "./models/Ingredient";
import { RecipeModel } from "./models/Recipe";

const createRecipe = async () => {
  const recipe = await RecipeModel.create({
    name: "Spaguetti Boloñesa",
    instructions: "Prepare todo en una olla, cocine y disfrute del plato",
    img: "https://plus.unsplash.com/premium_photo-1661753756901-7fb6c41e2d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2V0YSUyMGN1bGluYXJpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  });

  await IngredientModel.create({
    name: "Spaguetti",
    quantity: 1,
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    recipe: recipe._id,
  });

  await IngredientModel.create({
    name: "Tomate",
    quantity: 3,
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    recipe: recipe._id,
  });

  await IngredientModel.create({
    name: "Cebolla",
    quantity: 1,
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    recipe: recipe._id,
  });

  await IngredientModel.create({
    name: "Carne",
    quantity: 1,
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    recipe: recipe._id,
  });

  await IngredientModel.create({
    name: "Especias",
    quantity: 2,
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    recipe: recipe._id,
  });

  console.log(`✅ Recipe with ingredients saved with id: ${recipe._id}`);
};

(async () => {
  await mongoose.connect(DB_URI);
  console.log("✅ DB Conectada");

  try {
    await IngredientModel.collection.drop();
    await RecipeModel.collection.drop();
  } catch (err) {
    console.log("⛔ Data does not found");
  }

  await createRecipe();

  await mongoose.disconnect();
  console.log("⛔ DB Desconectada");
})();
