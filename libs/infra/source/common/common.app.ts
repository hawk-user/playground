import { type CommonRuntime } from './common.runtime';
import { type CommonLogger } from './common.logger';
import { type CommonEnv } from './common.env';


export abstract class CommonApp<T> {

    private readonly _engine: T;
    private readonly _logger: CommonLogger;
    private readonly _runtime: CommonRuntime;

    protected constructor(
        runtime: CommonRuntime,
        logger: CommonLogger,
        engine: T
    ) {
        this._runtime = runtime;
        this._logger = logger;
        this._engine = engine;
    }

    public get engine (): T {
        return this._engine;
    }

    public get logger (): CommonLogger{
        return this._logger;
    }

    public get env (): Readonly<CommonEnv> {
        return this._runtime._env();
    }

}