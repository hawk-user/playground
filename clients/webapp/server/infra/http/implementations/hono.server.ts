import { 
    type CommonRuntime,
    type CommonServer,
    type Handler
} from '@libs/infra/contracts';

import { type CommonLogger } from '@libs/core';
import { serve } from '@hono/node-server';

import { 
    Hono, 
    type Context as HonoContext,
    type Next as HonoNext 
} from 'hono';

export class HonoServer implements CommonServer<
    HonoContext,
    HonoNext
> {

    
    private app: Hono;
    private logger: CommonLogger;
    protected runtime: CommonRuntime;

    private constructor (
        runtime: CommonRuntime,
        logger: CommonLogger
    ) {
        this.app = new Hono();
        this.logger = logger;
        this.runtime = runtime;
    }

    public startOn (port: number) {
        const options = { port, fetch: this.app.fetch };
        const message = `The server listens on port ${port}.`
        serve(options, () => this.logger.informational(message));
    };

    public usePreHandler<G> (
        handler: Handler<HonoContext, HonoNext, G>
    ): void {
        this.app.use('*', handler);
    }

    public static use(
        runtime: CommonRuntime,
        logger: CommonLogger
    ) {
        return new HonoServer(runtime, logger);
    }

}