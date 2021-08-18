import "reflect-metadata";
import { config } from "@config";
import server from "./server";

import middleware from "@plugins/middleware";
import healthcheck from "@plugins/healthcheck";

// Set plugins
server.register(middleware);
server.register(healthcheck);

const start = async () => {
    try {
        await server.listen(config.server.port, config.server.host);
        server.swagger();
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

process.on("uncaughtException", error => {
    server.log.error(error);
});
process.on("unhandledRejection", error => {
    server.log.error(error);
});

start();
