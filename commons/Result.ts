export enum ResultStatus {
    Success = 0,
    AccessError = 1,
    ServerError = 2,
}
export interface IResult {
    status: ResultStatus;
    message: string;
    model?: object | void;
}
export async function toResultPromise(func: () => Promise<object | void>): Promise<IResult> {
    let result: IResult;
    try {
        result = {
            status: ResultStatus.Success,
            message: "OK",
            model: await func()
        };
    } catch (error) {
        result = {
            status: ResultStatus.ServerError,
            message: "Error",
        };
    }
    return result;
}
export function toResult(func: () => object | void): IResult {
    let result: IResult;
    try {
        result = {
            status: ResultStatus.Success,
            message: "OK",
            model: func()
        };
    } catch (error) {
        result = {
            status: ResultStatus.ServerError,
            message: "Error",
        };
    }
    return result;
}