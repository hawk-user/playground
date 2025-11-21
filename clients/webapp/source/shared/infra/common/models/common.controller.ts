import { type ReasonsToCommunicate } from '@shared/core';

export interface CommonController<R, T> {
    sendHtml: ReasonsToCommunicate<[response: R, html: string], R>;
    send: ReasonsToCommunicate<[response: R, code: number, message: T], R>;
}