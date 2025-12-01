import { type ReasonForBeing } from '@libs/core';
import { CommonEnv } from './common.env';

export type CommonRuntimeFileURLToPath = ReasonForBeing<[url: string], string>;
export type CommonRuntimePathToDirname  = ReasonForBeing<[path: string], string>;
export type CommonRuntimeReadFileSync = ReasonForBeing<[path: string], string>;
export type CommonRuntimeResolvePath = ReasonForBeing<[path: string], string>;

export abstract class CommonRuntime {

    private readonly env: CommonEnv;

    abstract fileURLToPath: CommonRuntimeFileURLToPath;
    abstract pathToDirname: CommonRuntimePathToDirname;
    abstract readFileSync: CommonRuntimeReadFileSync;
    abstract resolvePath: CommonRuntimeResolvePath;

    public _env (): Readonly<CommonEnv> {
        return this.env;
    }

    protected constructor (env: CommonEnv) {
        this.env = env;
    }
    
}