import { BaseRoute } from '../infra/web';
import { FrontPageDefinition } from './front-page';

export const pageConfigs = {
    [FrontPageDefinition.getPath()]: FrontPageDefinition
}

export const pageRoutes = BaseRoute.defineRoutes(pageConfigs)