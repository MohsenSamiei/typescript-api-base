import request from "supertest";
import app from "../source/app";
import { ServiceResultStatus } from "../source/commons/serviceresult";

describe("GET /api/healthcheck/v1", () => {
    it("Should return status code 0 Success", async () => {
        const response = await request(app).get("/api/healthcheck/v1");
        expect(response.status).toEqual(200);
        expect(response.body.status).toEqual(ServiceResultStatus.Success);
    });
});