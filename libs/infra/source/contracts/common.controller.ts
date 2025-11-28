import { type ReasonForBeing } from '@libs/core';

export interface CommonController<R, T> {
    sendHtml: ReasonForBeing<[response: R, html: string], void>;
    sendText: ReasonForBeing<[response: R, code: T, message: string], void>;
}