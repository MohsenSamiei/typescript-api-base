import request from "supertest";
import app from "../source/app";
import { ResultStatus } from "../source/commons/Result";

describe("GET /api/healthcheck/v1", () => {
    it("Should return status code 0 Success", async () => {
        const response = await request(app).get("/api/healthcheck/v1");
        expect(response.status).toEqual(200);
        expect(response.body.status).toEqual(ResultStatus.Success);
    });
});