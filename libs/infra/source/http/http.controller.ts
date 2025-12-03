import { CommonController, type BaseStatusCode } from '../common/common.controller';

type UnhandledError = 500;

export type HttpStatusCodeList = {} & BaseStatusCode<UnhandledError>;

export type HttpStatusCode = HttpStatusCodeList[keyof HttpStatusCodeList];

const httpStatusCodeList: HttpStatusCodeList = {
    unhandledErr: 500
}

export abstract class HttpController<T, R> extends CommonController<T, R, HttpStatusCode> {
    constructor () { super(httpStatusCodeList) }
}