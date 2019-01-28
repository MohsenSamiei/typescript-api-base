import MockRepository from "../repositories/MockRepository"
import IMock from "../models/IMock";
import { Service } from "typedi";

@Service()
export default class Mock_ListService {
    constructor(
       private mockRepository: MockRepository
    ) {
    }

    v1(): Promise<IMock[]> {
        return this.mockRepository.list();
    }
}