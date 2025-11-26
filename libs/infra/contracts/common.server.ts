import { type ReasonsToCommunicate } from '@libs/core';

export type Handler<C, Next, T = void> = (
    context: C, 
    next: Next
) => Promise<T>

export interface CommonServer<I, N> {
    startOn: ReasonsToCommunicate<[port: number], void>;
    usePreHandler: ReasonsToCommunicate<[handler: Handler<I, N>], void>;
}