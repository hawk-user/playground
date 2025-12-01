import {  type ReasonForBeing } from '@libs/core';
import { CommonApp } from './common.app';

export type CommonServerStart = ReasonForBeing<[], void>;

export abstract class CommonServer<T> {

    protected readonly app: CommonApp<T>;
    
    abstract start: CommonServerStart;

    protected constructor(app: CommonApp<T>) {
        this.app = app;
    }

}