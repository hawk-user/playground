import { type ReasonForBeing } from '@libs/core';

export interface CommonRuntime {
    fileURLToPath: ReasonForBeing<[url: string], string>
    pathToDirname: ReasonForBeing<[path: string], string>
    readFile: ReasonForBeing<[path: string], string>
    resolvePath: ReasonForBeing<[...path: string[]], string>
}