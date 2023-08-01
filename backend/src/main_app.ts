import { FastifyPluginAsync } from "fastify";
import { RoutesPlugin } from "./routes/main";
import fastifyFormbody from "@fastify/formbody";
import fastifyBlipp from "fastify-blipp";
import fastifyCors from "@fastify/cors";
import { DBPlugin } from "./lib/db";
import { NewsArticlePlugin } from "./routes/news";
import { PuebloHousePlugin } from "./routes/pueblohouses";

const routesPlugin: FastifyPluginAsync = async (server) => {
  // server.addHook("preValidation", server.authenticate);
  server.register(RoutesPlugin);
  server.register(NewsArticlePlugin, { prefix: "/news" });
  server.register(PuebloHousePlugin, { prefix: "/houses" });
};


export const mainApp: FastifyPluginAsync = async (server) => {
  // DB Connection
  server.register(DBPlugin);

  // fastify-blipp
  server.register(fastifyBlipp);

  // @fastify/body
  server.register(fastifyFormbody);

  // @fastify/cors
  server.register(fastifyCors);

  // Plugins registration
  await server.register(NewsArticlePlugin, { prefix: "/news" });
  await server.register(PuebloHousePlugin, { prefix: "/houses" });
  await server.register(RoutesPlugin);

  // fastify-blipp initializer
  server.blipp();
};
