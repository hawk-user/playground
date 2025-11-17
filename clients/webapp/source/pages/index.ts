import { BaseRoute } from '../infra/web';
import { FrontPageDefinition } from './front-page';

export const pageConfigs = [
    BaseRoute.defineRoute(FrontPageDefinition)
];