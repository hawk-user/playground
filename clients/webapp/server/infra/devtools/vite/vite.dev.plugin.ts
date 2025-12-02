import {  type CommonServerPlugin } from '@libs/infra';

import { 
    createServer,
    type Connect,
    type InlineConfig
} from 'vite';

const config: InlineConfig = {
    appType: 'custom',
    configFile: 'configs/vite.config.ts',
    server: { middlewareMode: true, hmr: true }
}

export type ViteDevPlugin = CommonServerPlugin<Connect.Server>;

export const viteDevPlugin: ViteDevPlugin = async () => {
    const { middlewares } = await createServer(config);
    return middlewares;
};