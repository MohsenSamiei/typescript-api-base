import { Service } from "typedi";
import IMock from "../models/imock";
import MockRepository from "../repositories/mockrepository";

@Service()
export default class MockListService {
    constructor(
       private mockRepository: MockRepository
    ) {
    }

    public v1(): Promise<IMock[]> {
        return this.mockRepository.list();
    }
}