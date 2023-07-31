import { FastifyPluginAsync } from "fastify";
import { BadRequest, NotFound } from "http-errors";
import { isEmptyAndNotString } from "../lib/isEmpty";
import { Types } from "mongoose";
import { PuebloHouseModel } from "../models/Pueblohouse";


export const PuebloHousePlugin: FastifyPluginAsync = async (server) => {
  server.get("/list", async (request, reply) => {
    const houses = await PuebloHouseModel.find().lean();

    return reply.send(houses);
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

    const house = await PuebloHouseModel.findById(id);

    if (!house) {
      throw new NotFound(`Pueblo House with ${id} not found`);
    }
  });

  server.post<{ Body: { title: string } }>(
    "/add",
    async (request, reply) => {
      const { title } = request.body;

      if (isEmptyAndNotString(title)) {
        throw new BadRequest("Title is required");
      }

      await PuebloHouseModel.create({ title });

      return reply.send({
        status: "created",
      });
    }
  );

  server.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;

    if (isEmptyAndNotString(id)) {
      throw new BadRequest("Pueblo House  is required");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequest("Pueblo House ID is invalid");
    }

    const findHouse = await PuebloHouseModel.findById(id);
    if (!findHouse) {
      throw new NotFound("House not found");
    }

    await PuebloHouseModel.findByIdAndDelete(id);

    return reply.send({ status: "deleted" });
  });

  // Deafult Routes
  server.get("/delete_all", async (request, reply) => {
    await PuebloHouseModel.deleteMany();

    return reply.send({ status: "all houses deleted" });
  });
};
