import "reflect-metadata";
import dotenv from "dotenv";
import Container from "typedi";
import bodyParser from "body-parser";
import express from "express";
import { Application } from "express";
import { useExpressServer, useContainer } from "routing-controllers";
import HealthCheckController from "./controllers/HealthCheckController";
import MockListController from "./controllers/MockListController";

dotenv.config();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

useContainer(Container);
useExpressServer(app, {
    routePrefix: "/api",
    controllers: [
        HealthCheckController,
        MockListController
    ]
});

try {
    const port = process.env.APP_PORT || 3000;
    app.listen(port, () => {
        console.log(`Application running on http://localhost:${port}`);
    });
} catch (error) {
    console.error("Application run has error:", error.message);
}