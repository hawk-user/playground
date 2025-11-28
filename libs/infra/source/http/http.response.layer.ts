import { CommonController, type BaseStatusCode } from '../common/common.controller';

export type HttpStatus = {
    unhandledErr: 500
} & BaseStatusCode;

export type LiteralHttpStatus = HttpStatus[keyof HttpStatus];

const defineHttpCode: HttpStatus = {
    unhandledErr: 500
}

export abstract class HttpResponseLayer<T> extends CommonController<T, LiteralHttpStatus> {
    constructor () { super(defineHttpCode) }
}