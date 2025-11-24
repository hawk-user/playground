import { type CommonRuntime } from './common.runtime';
import { type ReasonsToCommunicate } from '@libs/core';

export type Handler<C, Next, T = void> = (
    context: C, 
    next: Next
) => Promise<T>

export interface CommonServer<I, N> {
    runtime: CommonRuntime;
    start: ReasonsToCommunicate<[], void>;
    usePreHandler: ReasonsToCommunicate<[handler: Handler<I, N>], void>;
}