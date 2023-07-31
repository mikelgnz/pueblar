import { FastifyPluginAsync } from "fastify";
import { BadRequest, NotFound } from "http-errors";
import { isEmptyAndNotString } from "../lib/isEmpty";
import { Types } from "mongoose";
import { NewsArticleModel } from "../models/NewsArticle";

export const NewsArticlePlugin: FastifyPluginAsync = async (server) => {
  server.get("/list", async (request, reply) => {
    const news = await NewsArticleModel.find().lean();

    return reply.send(news);
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

    const recipe = await NewsArticleModel.findById(id);

    if (!recipe) {
      throw new NotFound(`News Article with ${id} not found`);
    }
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

      await NewsArticleModel.create({ name, instructions });

      return reply.send({
        status: "created",
      });
    }
  );

  server.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;

    if (isEmptyAndNotString(id)) {
      throw new BadRequest("News Article ID is required");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequest("News Article ID is invalid");
    }

    const findRecipe = await NewsArticleModel.findById(id);
    if (!findRecipe) {
      throw new NotFound("Recipe not found");
    }

    await NewsArticleModel.findByIdAndDelete(id);

    return reply.send({ status: "deleted" });
  });

  // Deafult Routes
  server.get("/delete_all", async (request, reply) => {
    await NewsArticleModel.deleteMany();

    return reply.send({ status: "all recipes deleted" });
  });
};
