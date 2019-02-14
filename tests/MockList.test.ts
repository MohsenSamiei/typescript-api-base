import request from "supertest";
import app from "../source/app";
import { ServiceResultStatus } from "../source/commons/serviceresult";

describe("GET /api/mocklist/v1", () => {
    it("Should return status code 0 Success", async () => {
        const response = await request(app).get("/api/mocklist/v1");
        expect(response.status).toEqual(200);
        expect(response.body.status).toEqual(ServiceResultStatus.Success);

        let modelType: string = typeof response.body.model;
        modelType = modelType === "object" ? Array.isArray(response.body.model) ? "array" : modelType : modelType;
        expect(modelType).toBe("array");
    });
});