import server from "@src/server";
import healthcheck from "@plugins/healthcheck";
import { StatusCodes } from "http-status-codes";

describe("healthcheck", () => {
    beforeEach(async () => {
        server.register(healthcheck);
    });

    it("ping [GET `/ping`]", async () => {
        const res = await server.inject({
            method: "GET",
            url: "/ping",
        });

        expect(res.statusCode).toEqual(StatusCodes.OK);

        expect(res.payload).toEqual("hello");
    });
});
