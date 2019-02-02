import { Controller, Get } from "routing-controllers";
import { IServiceResult, ServiceResultStatus } from "../commons/serviceresult";
import MockListService from "../services/mocklistservice";

@Controller("/mocklist")
export default class MockListController {
    constructor(
        private mock_listService: MockListService
    ) {
    }

    @Get("/v1")
    public async v1(
    ): Promise<IServiceResult> {
        const result: IServiceResult = {
            status: ServiceResultStatus.Success,
            message: "Success",
            model: await this.mock_listService.v1()
        };
        return result;
    }

}