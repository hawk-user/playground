import {  HonoServer } from './infra/http/composite-objects';

import { 
    PinoLogger,
    NodeJSRuntime,
    BaseEnv
} from './infra/runtime/composite-objects';

const devEnv = new BaseEnv();
const runtime = new NodeJSRuntime(devEnv);
const logger = new PinoLogger(true);
const app = new HonoServer(runtime, logger);

app.start();