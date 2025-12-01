import { 
    type CommonServerStart,
    type CommonApp,
    CommonServer
} from '@libs/infra';

// import { createServer, defineConfig, type ViteDevServer } from 'vite';
import { type Application } from 'express';

export class ExpressDevServer extends CommonServer<Application> {
    
    constructor (app: CommonApp<Application>) {
        super(app);
    }

    start: CommonServerStart = async() => {
        const { env, engine, logger } = this.app;
        const message = `The server listens on port ${env.PORT}.`;
        engine.listen(env.PORT, () => logger.informational(message))
    }

}