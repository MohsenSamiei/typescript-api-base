import { Service } from "typedi";
import IMock from "../models/IMock";
import MockRepository from "../repositories/MockRepository";

@Service()
export default class Mock_ListService {
    constructor(
       private mockRepository: MockRepository
    ) {
    }

    public v1(): Promise<IMock[]> {
        return this.mockRepository.list();
    }
}