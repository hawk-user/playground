import { 
    ExpressServer,
    ExpressApp
} from './infra/http/composite-objects';

import { 
    PinoLogger,
    NodeJSRuntime,
    BaseEnv
} from './infra/runtime/composite-objects';

import { viteDevPlugin } from './infra/devtools/vite';

const env = new BaseEnv();
const runtime = new NodeJSRuntime(env);
const logger = new PinoLogger(true);
const app = new ExpressApp(runtime, logger);

const server = new ExpressServer(
    app, [viteDevPlugin]
);

server.start();