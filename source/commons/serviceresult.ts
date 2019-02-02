export enum ServiceResultStatus {
    Success = 0,
    AccessError = 1,
    LogicError = 2,
    ServerError = 3,
}
export interface IServiceResult {
    status: ServiceResultStatus;
    message: string;
    model?: any;
}