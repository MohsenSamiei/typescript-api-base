import "reflect-metadata";
import express from "express";
import Container from "typedi";
import bodyParser from "body-parser";
import swaggerui from "swagger-ui-express";
import ErrorHandler from "./commons/errorhandler";
import { Application } from "express";
import { events, emitter } from "./events";
import { appconfig, envconfig } from "./commons/configs";
import { useExpressServer, useContainer } from "routing-controllers";

import MockListController from "./controllers/mocklistcontroller";
import HealthCheckController from "./controllers/healthcheckcontroller";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

useContainer(Container);
useExpressServer(app, {
    defaultErrorHandler: false,
    middlewares: [ErrorHandler],
    routePrefix: "/api",
    controllers: [
        HealthCheckController,
        MockListController
    ]
});

if (!envconfig.is_production) {
    // tslint:disable-next-line:no-var-requires
    const swaggerdocument = require("../statics/swagger.json");
    app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerdocument));
}

if (!envconfig.is_test) {
    try {
        app.listen(appconfig.port, () => {
            emitter.emit(events.on_app_started, envconfig.name, appconfig.port);
        });
    } catch (error) {
        emitter.emit(events.on_app_crashed, error);
    }
}

export default app;