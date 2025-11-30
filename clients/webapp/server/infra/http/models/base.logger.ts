import {
    type CommonLoggerFatal,
    type CommonLoggerDebug,
    type CommonLoggerError,
    type CommonLoggerInformational,
    type CommonLoggerWarning,
    CommonLogger
} from '@libs/infra';

import pino from 'pino';

export class BaseLogger extends CommonLogger {

    private logger: pino.Logger;

    constructor (isDev?: boolean) {
        super(isDev)
        const transport = this.isDev ? this.useTransporter() : undefined;
        this.logger = pino({ transport });
    }

    private useTransporter (): pino.TransportSingleOptions {
        return { target: 'pino-pretty', options: { colorize: true } }
    }

    public fatal: CommonLoggerFatal = (message: string) =>  { this.logger.fatal(message) };
    public error: CommonLoggerError = (message: string) => { this.logger.error(message) };
    public warning: CommonLoggerWarning = (message: string) => { this.logger.warn(message) };
    public informational: CommonLoggerInformational = (message: string) => { this.logger.info(message) };
    public debug: CommonLoggerDebug = (message: string) =>{ this.logger.debug(message) };

}