import { 
    CommonRuntime,
    type CommonEnv,
    type CommonRuntimeFileURLToPath,
    type CommonRuntimePathToDirname,
    type CommonRuntimeReadFileSync,
    type CommonRuntimeResolvePath
} from '@libs/infra';

import nodeUrl from 'node:url';
import nodePath from 'node:path';
import nodeFs from 'node:fs';

export class NodeJSRuntime extends CommonRuntime {

    constructor (env: CommonEnv) { super(env) }

    public fileURLToPath: CommonRuntimeFileURLToPath = (url: string) => {
        return nodeUrl.fileURLToPath(url)
    };

    public pathToDirname : CommonRuntimePathToDirname = (path: string) => {
        return nodePath.dirname(path)
    };

    public readFileSync: CommonRuntimeReadFileSync = (path: string) => {
        return nodeFs.readFileSync(path, { encoding: 'utf-8' })
    };

    public resolvePath: CommonRuntimeResolvePath = (path: string) => { 
        const dirname = this.pathToDirname(
            this.fileURLToPath(import.meta.url)
        );
        return nodePath.resolve(dirname, path);
     };

}