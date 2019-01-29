import request from "supertest";
import app from "../source/app";

describe("GET /healthcheck/v1", () => {
    it("should return 200 OK", () => {
        return request(app).get("/api/healthcheck/v1")
            .expect(200);
    });
});