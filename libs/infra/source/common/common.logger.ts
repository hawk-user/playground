import { type ReasonForBeing } from '@libs/core';

export type CommonLoggerFatal = ReasonForBeing<[message: string], void>;
export type CommonLoggerError = ReasonForBeing<[message: string], void>;
export type CommonLoggerWarning = ReasonForBeing<[message: string], void>;
export type CommonLoggerInformational = ReasonForBeing<[message: string], void>;
export type CommonLoggerDebug = ReasonForBeing<[message: string], void>;

export abstract class CommonLogger {

    protected readonly isDev?: boolean;

    abstract fatal: CommonLoggerFatal;
    abstract error: CommonLoggerError;
    abstract warning: CommonLoggerWarning;
    abstract informational: CommonLoggerInformational;
    abstract debug: CommonLoggerDebug;

    protected constructor (isDev?: boolean) {
        this.isDev = isDev;
    }
    
}