import { type CommonRuntime } from './common.runtime';
import { type ReasonsToCommunicate } from '@shared/core';

export interface CommonServer {
    runtime: CommonRuntime;
    listenOn: ReasonsToCommunicate<[port: number], void>;
    useMiddleware: ReasonsToCommunicate<[middleware: unknown], this>;
}