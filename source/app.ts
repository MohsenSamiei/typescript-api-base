import "reflect-metadata";
import Container from "typedi";
import bodyParser from "body-parser";
import express from "express";
import { Application } from "express";
import { useExpressServer, useContainer } from "routing-controllers";
import HealthCheckController from "./controllers/HealthCheckController";
import MockListController from "./controllers/MockListController";

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

export default app;