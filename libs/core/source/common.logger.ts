import { type ReasonsToCommunicate } from './communication';

export interface CommonLogger {
    fatal: ReasonsToCommunicate<[message: string], void>;
    error: ReasonsToCommunicate<[message: string], void>;
    warning: ReasonsToCommunicate<[message: string], void>;
    informational: ReasonsToCommunicate<[message: string], void>;
    debug: ReasonsToCommunicate<[message: string], void>;
}