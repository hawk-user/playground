import { 
    type CommonRuntime,
    type CommonSetup,
    type CommonServerStartOn
} from '@libs/infra';

import { CommonServer } from '@libs/infra';
import { CoreLogger } from '@libs/core';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';

export class BaseServer extends CommonServer<Hono> {
    
    constructor (
        runtime: CommonRuntime,
        logger: CoreLogger,
        setup?: CommonSetup
    ) {
        super(runtime, logger, new Hono(), setup);
    }

    startOn: CommonServerStartOn = (port: number) => {
        const options = { port, fetch: this.app.fetch };
        const message = `The server listens on port ${port}.`;
        serve(options, () => this.logger.informational(message));
    }

}