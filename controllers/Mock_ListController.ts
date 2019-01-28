import { Controller, Get } from "routing-controllers";
import { IResult, toResultPromise } from "../commons/Result";
import Mock_ListService from "../services/Mock_ListService";

@Controller("/mock_list")
export default class Mock_ListController {
    constructor(
        private mock_listService: Mock_ListService
    ) {
    }

    @Get("/v1")
    public async v1(
    ): Promise<IResult> {
        return await toResultPromise(() => this.mock_listService.v1());
    }

}