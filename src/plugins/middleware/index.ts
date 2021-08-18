import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";

import helmet from "fastify-helmet";
import swagger from "fastify-swagger";

import { swaggerOpt } from "@config";

export default fp(async (server: FastifyInstance) => {
    // Set middlewares
    // csp except policy for swagger
    server.register(helmet, {
        contentSecurityPolicy: {
            directives: {
                defaultSrc: [`'self'`],
                styleSrc: [`'self'`, `'unsafe-inline'`, "validator.swagger.io"],
                imgSrc: [`'self'`, "data:", "validator.swagger.io"],
                scriptSrc: [
                    `'self'`,
                    `https: 'unsafe-inline'`,
                    "validator.swagger.io",
                ],
            },
        },
    });
    server.register(swagger, swaggerOpt);
});
