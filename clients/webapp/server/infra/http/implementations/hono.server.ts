import { 
    type CommonRuntime,
    type CommonServer,
    type Handler
} from '@libs/infra/contracts';

import { NodeJSRutime } from './nodejs.runtime';
import { serve } from '@hono/node-server';

import { 
    Hono,
    type Context,
    type Next 
} from 'hono';

export class HonoServer implements CommonServer<Context, Next> {

    runtime: CommonRuntime = new NodeJSRutime();
    app: Hono = new Hono();

    public start = (): void => { serve(this.app) };

    public usePreHandler<G> (
        handler: Handler<Context, Next, G>
    ): void {
        this.app.use('*', handler);
    }

}