import { type CommonRuntime } from '@libs/infra';
import { CommonLogger, CommonApp } from '@libs/infra';
import express, { type Application } from 'express';

export class ExpressApp extends CommonApp<Application> {
    
    constructor (
        runtime: CommonRuntime,
        logger: CommonLogger
    ) {
        super(runtime, logger, express());
    }

}