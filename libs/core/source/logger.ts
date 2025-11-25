import { type ReasonsToCommunicate } from './communication';

export interface Logger {
    emergency: ReasonsToCommunicate<[message: string], void>;
    alert: ReasonsToCommunicate<[message: string], void>;
    critical: ReasonsToCommunicate<[message: string], void>;
    warning: ReasonsToCommunicate<[message: string], void>;
    notice: ReasonsToCommunicate<[message: string], void>;
    informational: ReasonsToCommunicate<[message: string], void>;
    debug: ReasonsToCommunicate<[message: string], void>;
}