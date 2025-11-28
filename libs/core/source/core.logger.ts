import { type ReasonForBeing } from './communication';

export type CoreLoggerFatal = ReasonForBeing<[message: string], void>;
export type CoreLoggerError = ReasonForBeing<[message: string], void>;
export type CoreLoggerWarning = ReasonForBeing<[message: string], void>;
export type CoreLoggerInformational = ReasonForBeing<[message: string], void>;
export type CoreLoggerDebug = ReasonForBeing<[message: string], void>;

export abstract class CoreLogger {

    protected readonly isDev?: boolean;

    abstract fatal: CoreLoggerFatal;
    abstract error: CoreLoggerError;
    abstract warning: CoreLoggerWarning;
    abstract informational: CoreLoggerInformational;
    abstract debug: CoreLoggerDebug;

    protected constructor (isDev?: boolean) {
        this.isDev = isDev;
    }
    
}