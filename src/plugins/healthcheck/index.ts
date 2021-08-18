import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";

import routes from "./routes";

export default fp(async (server: FastifyInstance) => {
    server.register(routes);
});
