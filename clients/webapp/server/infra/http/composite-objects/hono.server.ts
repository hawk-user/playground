import { 
    type CommonRuntime,
    type CommonServerStart
} from '@libs/infra';

import { CommonServer, CommonLogger } from '@libs/infra';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';

export class HonoServer extends CommonServer<Hono> {
    
    constructor (
        runtime: CommonRuntime,
        logger: CommonLogger
    ) {
        super(runtime, logger, new Hono());
    }

    start: CommonServerStart = () => {
        const port = this.runtime.getEnv().PORT;
        const options = { port, fetch: this.app.fetch };
        const message = `The server listens on port ${port}.`;
        serve(options, () => this.logger.informational(message));
    }

}