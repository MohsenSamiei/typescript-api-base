import { Controller, Get } from "routing-controllers";
import { IServiceResult, ServiceResultStatus } from "../commons/serviceresult";

@Controller("/healthcheck")
export default class HealthCheckController {

    @Get("/v1")
    public v1(
    ): IServiceResult {
        const result: IServiceResult = {
            status: ServiceResultStatus.Success,
            message: "Success"
        };
        return result;
    }

}