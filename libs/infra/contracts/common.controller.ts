import { type ReasonsToCommunicate } from '@libs/core';

export interface CommonController<R, T> {
    sendHtml: ReasonsToCommunicate<[response: R, html: string], void>;
    sendText: ReasonsToCommunicate<[response: R, code: T, message: string], void>;
}