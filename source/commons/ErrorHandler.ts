import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import { NextFunction, Response, Request } from "express";
import { IResult, ResultStatus } from "./Result";

@Middleware({ type: "after" })
export default class ErrorHandler implements ExpressErrorMiddlewareInterface {
    public error(error: Error, request: Request, response: Response, next: NextFunction) {
        if (error) {
            console.log("ErrorHandler:", error.message);
            const result: IResult = {
                status: ResultStatus.ServerError,
                message: "ServerError"
            };
            response.send(result).end();
        } else {
            next(error);
        }
    }
}