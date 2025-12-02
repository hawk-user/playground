import { 
    type CommonServerStart,
    type CommonServerUsePlugin,
    type CommonServerPlugin,
    type CommonApp,
    CommonServer
} from '@libs/infra';

import { 
    type Application,
    type RequestHandler
} from 'express';

export class ExpressServer<
    A extends Application,
    K extends RequestHandler
> extends CommonServer<A, K> {
    
    constructor (
        app: CommonApp<A>,
        plugins?: CommonServerPlugin<K>[]
    ) {
        super(app, plugins);
    }

    protected usePlugin: CommonServerUsePlugin<K> = (plugin: K) => {
        this.app.engine.use(plugin);
    }

    start: CommonServerStart = async () => {
        const { env, engine, logger } = this.app;
        const message = `The server listens on port ${env.PORT}.`;
        engine.listen(env.PORT, () => logger.informational(message));
    }

}