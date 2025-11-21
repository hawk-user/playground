import { type ReasonsToCommunicate } from '@shared/core';

export interface CommonRuntime {
    fileURLToPath: ReasonsToCommunicate<[url: string], string>
    pathToDirname: ReasonsToCommunicate<[path: string], string>
    readFile: ReasonsToCommunicate<[path: string], string>
    resolvePath: ReasonsToCommunicate<[...path: string[]], string>
}