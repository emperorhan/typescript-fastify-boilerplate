import { SwaggerOptions } from "fastify-swagger";
import { FastifyRegisterOptions } from "fastify";

export const swaggerOpt: FastifyRegisterOptions<SwaggerOptions> = {
    routePrefix: "/docs",
    exposeRoute: true,
    swagger: {
        info: {
            title: "TYPESCRIPT FASTIFY BOILERPLATE",
            description: "typescript-fastify-typedi bootstrap",
            version: "0.0.0",
        },
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        },
        tags: [
            {
                name: "Healthcheck",
                description: "health check related endpoints",
            },
        ],
        securityDefinitions: {
            Authorization: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },
};
