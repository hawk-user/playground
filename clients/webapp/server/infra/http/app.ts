import { 
    BaseLogger,
    BaseServer,
    BaseRuntime,
    BaseEnv
} from './models';

const env = new BaseEnv()
const runtime = new BaseRuntime(env);
const logger = new BaseLogger(true);
const app = new BaseServer(runtime, logger);

app.start();