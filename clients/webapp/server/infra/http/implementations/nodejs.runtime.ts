import { type CommonRuntime } from '@libs/infra';
import nodeUrl from 'node:url';
import nodePath from 'node:path';
import nodeFs from 'node:fs';

export class NodeJSRutime implements CommonRuntime {

    public fileURLToPath (url: string): string {
        return nodeUrl.fileURLToPath(url);
    }

    public pathToDirname (path: string): string {
        return nodePath.dirname(path);
    }

    public readFile (path: string) {
        return nodeFs.readFileSync(path, { encoding: 'utf-8' });
    }

    public resolvePath (path: string): string {
        const dirname = this.pathToDirname(
            this.fileURLToPath(import.meta.url)
        );
        return nodePath.resolve(dirname, path);
    };

}

