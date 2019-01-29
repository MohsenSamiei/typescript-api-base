import { Controller, Get } from "routing-controllers";
import { IResult, ResultStatus } from "../commons/Result";
import MockListService from "../services/MockListService";

@Controller("/mock_list")
export default class MockListController {
    constructor(
        private mock_listService: MockListService
    ) {
    }

    @Get("/v1")
    public async v1(
    ): Promise<IResult> {
        const result: IResult = {
            status: ResultStatus.Success,
            message: "Success",
            model: await this.mock_listService.v1()
        };
        return result;
    }

}