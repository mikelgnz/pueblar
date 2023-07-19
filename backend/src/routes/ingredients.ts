import { FastifyPluginAsync } from "fastify";
import { IngredientModel } from "../models/Ingredient";

export const IngredientPlugin: FastifyPluginAsync = async (server) => {
  server.get("/list", (request, reply) => {
    const ingredientList = [
      {
        name: "Spaguetti",
        quantity: 1,
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      },
      {
        name: "Tomate",
        quantity: 3,
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      },
      {
        name: "Cebolla",
        quantity: 1,
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      },
      {
        name: "Carne",
        quantity: 1,
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      },
      {
        name: "Especias",
        quantity: 2,
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      },
    ];

    return reply.send(ingredientList);
  });

  server.post<{
    Body: { name: string; quantity: number };
    Querystring: { recipe_id: string };
  }>("/add", async (request, reply) => {
    const { name, quantity } = request.body;
    const { recipe_id } = request.query;

    const newIngredient = new IngredientModel({
      name,
      quantity,
      img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      recipe: recipe_id,
    });

    const doc = await newIngredient.save();
    console.log(`Created ingredient with id ${doc._id}`);
    return reply.redirect("/list");
  });

  server.get<{ Params: { id: string } }>(
    "/delete/:id",
    async (request, reply) => {
      const { id } = request.params;

      await IngredientModel.findByIdAndDelete(id);

      return reply.redirect("/list");
    }
  );
};
