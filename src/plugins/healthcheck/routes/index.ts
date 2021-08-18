import fp from "fastify-plugin";
import {
    FastifyInstance,
    FastifyRequest,
    FastifyReply,
    // FastifyLoggerInstance,
} from "fastify";
// import { Container } from "typedi";

import { pingSchema } from "./docs";

export default fp(async (server: FastifyInstance) => {
    server.get(
        "/ping",
        { schema: pingSchema },
        async (request: FastifyRequest, reply: FastifyReply) => {
            // const logger: FastifyLoggerInstance = Container.get("Logger");
            reply.code(200).send("hello");
        }
    );
});
