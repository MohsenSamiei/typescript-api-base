import IMock from "../models/IMock";
import { Service } from "typedi";

@Service()
export default class MockRepository {
    list(): Promise<IMock[]> {
        return new Promise((resolve, reject) => {
            const list: IMock[] = [
                {
                    id: 1,
                    name: "A"
                },
                {
                    id: 2,
                    name: "B"
                },
                {
                    id: 3,
                    name: "C"
                }
            ]
            resolve(list);
        });
    }
}