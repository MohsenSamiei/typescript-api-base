import { Service } from "typedi";
import IMock from "../models/IMock";

@Service()
export default class MockRepository {
    public list(): Promise<IMock[]> {
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
                },
            ];
            resolve(list);
        });
    }
}