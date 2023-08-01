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
      throw new BadRequest("News ID is required");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequest("News ID is invalid");
    }

    console.log(`Fetching news ${id}`);

    const news = await NewsArticleModel.findById(id);

    if (!news) {
      throw new NotFound(`News Article with ${id} not found`);
    }
  });

  server.post<{ Body: { title: string; body: string } }>(
    "/add",
    async (request, reply) => {
      const { title, body } = request.body;

      if (isEmptyAndNotString(title)) {
        throw new BadRequest("Title is required");
      }

      if (isEmptyAndNotString(body)) {
        throw new BadRequest("Body is required");
      }

      await NewsArticleModel.create({ title, body });

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

    const findNews = await NewsArticleModel.findById(id);
    if (!findNews) {
      throw new NotFound("News not found");
    }

    await NewsArticleModel.findByIdAndDelete(id);

    return reply.send({ status: "deleted" });
  });

  // Deafult Routes
  server.get("/delete_all", async (request, reply) => {
    await NewsArticleModel.deleteMany();

    return reply.send({ status: "all news deleted" });
  });
};
