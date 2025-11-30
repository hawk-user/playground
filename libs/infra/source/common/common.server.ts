import {  type ReasonForBeing } from '@libs/core';
import { CommonRuntime } from './common.runtime';
import { CommonLogger } from './common.logger';

export type CommonServerStart = ReasonForBeing<[], void>;

export abstract class CommonServer<T> {

    protected readonly app: T;
    protected readonly logger: CommonLogger;
    protected readonly runtime: CommonRuntime;

    abstract start: CommonServerStart;

    protected constructor(
        runtime: CommonRuntime,
        logger: CommonLogger,
        app: T
    ) {
        this.runtime = runtime;
        this.logger = logger;
        this.app = app;
    }

}