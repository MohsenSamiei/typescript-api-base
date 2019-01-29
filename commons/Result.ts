export enum ResultStatus {
    Success = 0,
    AccessError = 1,
    LogicError = 2,
    ServerError = 3,
}
export interface IResult {
    status: ResultStatus;
    message: string;
    model?: any;
}