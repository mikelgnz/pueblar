import fastify from "fastify";
import { pino } from "pino";
import { mainApp } from "./main_app";
import { PORT } from "./config";

// Server instance
const server = fastify({
  logger: pino({
    transport: {
      target: "pino-pretty",
    },
  }),
  disableRequestLogging: true,
});

// Main plugin registration
server.register(mainApp);

// Port configuration
server.listen({ port: PORT }, (error, address) => {
  if (error) throw error;
  // Server is now online on ${address}
});
