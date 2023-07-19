import { FastifyPluginAsync } from "fastify";
import { IngredientModel } from "../models/Ingredient";
import {
  RecipeInterface,
  RecipeModel,
  getIngredientsFromRecipe,
} from "../models/Recipe";
import { BadRequest, NotFound } from "http-errors";
import { isEmptyAndNotString } from "../lib/isEmpty";
import { Types } from "mongoose";

export const RecipesPlugin: FastifyPluginAsync = async (server) => {
  server.get("/list", async (request, reply) => {
    const recipes = await RecipeModel.find().lean();

    return reply.send(recipes);
  });

  server.get<{ Params: { id: string } }>("/get/:id", async (request, reply) => {
    const { id } = request.params;

    if (isEmptyAndNotString(id)) {
      throw new BadRequest("Recipe ID is required");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequest("Recipe ID is invalid");
    }

    console.log(`Fetching recipe ${id}`);

    const recipe = await RecipeModel.findById(id);

    if (!recipe) {
      throw new NotFound(`Recipe with ${id} not found`);
    }

    const ingredients = await getIngredientsFromRecipe(recipe._id);

    return reply.send({ ...recipe.toObject(), ingredients });
  });

  server.post<{ Body: { name: string; instructions: string } }>(
    "/add",
    async (request, reply) => {
      const { name, instructions } = request.body;

      if (isEmptyAndNotString(name)) {
        throw new BadRequest("Name is required");
      }

      if (isEmptyAndNotString(instructions)) {
        throw new BadRequest("Instructions are required");
      }

      await RecipeModel.create({ name, instructions });

      return reply.send({
        status: "created",
      });
    }
  );

  server.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;

    if (isEmptyAndNotString(id)) {
      throw new BadRequest("Recipe ID is required");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequest("Recipe ID is invalid");
    }

    const findRecipe = await RecipeModel.findById(id);
    if (!findRecipe) {
      throw new NotFound("Recipe not found");
    }

    await RecipeModel.findByIdAndDelete(id);

    return reply.send({ status: "deleted" });
  });

  // Deafult Routes
  server.get("/delete_all", async (request, reply) => {
    await IngredientModel.deleteMany();
    await RecipeModel.deleteMany();

    return reply.send({ status: "all recipes deleted" });
  });
};
