import { 
    type ReasonForBeing,
    type CoreLogger,
} from '@libs/core';

import { type CommonRuntime } from './common.runtime';
import { type CommonSetup } from './common.setup';

export type CommonServerStartOn = ReasonForBeing<[port: number], void>;

export abstract class CommonServer<T> {

    protected readonly app: T;
    protected readonly logger: CoreLogger;
    protected readonly runtime: CommonRuntime;
    protected readonly setup?: CommonSetup;

    abstract startOn: CommonServerStartOn;

    protected constructor(
        runtime: CommonRuntime,
        logger: CoreLogger,
        app: T,
        setup?: CommonSetup
    ) {
        this.runtime = runtime;
        this.logger = logger;
        this.app = app
        this.setup = setup
    }

}