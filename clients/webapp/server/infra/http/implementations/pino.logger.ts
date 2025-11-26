import { type CoreLogger } from '@libs/core';
import pino from 'pino';

export class PinoLogger implements CoreLogger {

    private logger: pino.Logger;

    constructor (isDev?: boolean) {
        const transport = isDev ? this.useTransporter() : undefined;
        this.logger = pino({ transport });
    }

    private useTransporter (): pino.TransportSingleOptions {
        return { target: 'pino-pretty', options: { colorize: true } }
    }

    public fatal (message: string) { this.logger.fatal(message) };
    public error (message: string) { this.logger.error(message) };
    public warning (message: string) { this.logger.warn(message) };
    public informational (message: string) { this.logger.info(message) };
    public debug (message: string) { this.logger.debug(message) };

}