import {
    type CoreLoggerFatal,
    type CoreLoggerDebug,
    type CoreLoggerError,
    type CoreLoggerInformational,
    type CoreLoggerWarning,
    CoreLogger
} from '@libs/core';

import pino from 'pino';

export class BaseLogger extends CoreLogger {

    private logger: pino.Logger;

    constructor (isDev?: boolean) {
        super(isDev)
        const transport = this.isDev ? this.useTransporter() : undefined;
        this.logger = pino({ transport });
    }

    private useTransporter (): pino.TransportSingleOptions {
        return { target: 'pino-pretty', options: { colorize: true } }
    }

    public fatal: CoreLoggerFatal = (message: string) =>  { this.logger.fatal(message) };
    public error: CoreLoggerError = (message: string) => { this.logger.error(message) };
    public warning: CoreLoggerWarning = (message: string) => { this.logger.warn(message) };
    public informational: CoreLoggerInformational = (message: string) => { this.logger.info(message) };
    public debug: CoreLoggerDebug = (message: string) =>{ this.logger.debug(message) };

}