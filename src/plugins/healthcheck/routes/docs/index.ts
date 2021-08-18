import { FastifySchema } from "fastify";

export const pingSchema: FastifySchema = {
    description: "Ping for this server",
    tags: ["Healthcheck"],
    summary: "Send ping to this server",
    response: {
        200: {
            description: "Successful response",
            type: "string",
        },
    },
};
