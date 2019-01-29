import request from "supertest";
import app from "../source/app";

describe("GET /mocklist/v1", () => {
    it("should return 200 OK", () => {
        return request(app).get("/api/mocklist/v1")
            .expect(200);
    });
});