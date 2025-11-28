import { NodeJSRutime } from './implementations';
import { BaseLogger, BaseServer } from './models';

const runtime = new NodeJSRutime();
const logger = new BaseLogger(true);
const app = new BaseServer(runtime, logger);

app.startOn(5010);