import {  type ReasonForBeing } from '@libs/core';
import { CommonApp } from './common.app';

export type CommonServerPlugin<R> = ReasonForBeing<[...params: unknown[]], Promise<R>>;
export type CommonServerStart = ReasonForBeing<[], void>;
export type CommonServerUsePlugin<P = unknown> = ReasonForBeing<[plugin: P], void | Promise<void>>;

export abstract class CommonServer<T,  P = unknown> {

    protected readonly app: CommonApp<T>;
    
    abstract start: CommonServerStart;
    protected abstract usePlugin: CommonServerUsePlugin<P>;

    protected constructor(
        app: CommonApp<T>,
        plugins?: CommonServerPlugin<P>[]
    ) {
        this.app = app;
        if (plugins) this.deferPluginsExecution(plugins);
    }

    private deferPluginsExecution (plugins: CommonServerPlugin<P>[]): void {
        Promise.resolve().then(() => this.applyPlugins(plugins));
    }

    private async applyPlugins (plugins: CommonServerPlugin<P>[]): Promise<void> {
        for (const plugin of plugins) {
            await this.usePlugin(await plugin());
        }
    }

}