import fastify, { FastifyInstance } from "fastify";
import { Server as HttpServer, IncomingMessage, ServerResponse } from "http";
import { Container } from "typedi";
import { config } from "@config";

class Server {
    readonly server: FastifyInstance<
        HttpServer,
        IncomingMessage,
        ServerResponse
    >;
    constructor() {
        this.server = fastify({
            logger: config.logger,
            trustProxy: true,
        });

        Container.set("Logger", this.server.log);
    }
}

export default new Server().server;
