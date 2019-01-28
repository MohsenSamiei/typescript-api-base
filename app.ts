import "reflect-metadata";
import Container from "typedi";
import bodyParser from "body-parser";
import express from "express";
import { Application } from "express";
import { useExpressServer, useContainer } from "routing-controllers";
import Health_CheckController from "./controllers/Health_CheckController";
import Mock_ListController from "./controllers/Mock_ListController";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

useContainer(Container);
useExpressServer(app, {
    routePrefix: "/api",
    controllers: [
        Health_CheckController,
        Mock_ListController
    ]
});

try {
    app.listen(80, () => {
        console.log(`Application running on http://localhost:${80}`);
    });
} catch (error) {
    console.error("Application run has error:", error.message);
}