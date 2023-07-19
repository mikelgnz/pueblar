import { FastifyPluginAsync } from "fastify";

export const RoutesPlugin: FastifyPluginAsync = async (server) => {
  // Basic example with headers
  server.get("/", (request, reply) => {
    return reply.send({
      status: "on",
    });
  });
};
