import { 
    HonoServer,
    NodeJSRutime,
    PinoLogger
} from './implementations';

const runtime = new NodeJSRutime();
const logger = new PinoLogger(true);

const app = HonoServer.use(runtime, logger);
app.startOn(5010);