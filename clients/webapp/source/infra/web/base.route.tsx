import { type JSX, type ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { Page, type PagePath } from '../../components';

export type RouteConfig = {
    readonly [path: string]: JSX.Element;
};

export class BaseRoute  {

    public static defineRoute (
        page: Page<string, JSX.Element>
    ): RouteConfig {
        return { [page.getPath()]: page.getElement() };
    }

    public static getPathFrom<P extends PagePath> (
        config: RouteConfig
    ): P {
        const [key] = Object.keys(config) as [P];
        return key;
    }

    public static getElementFrom (
        config: RouteConfig
    ): JSX.Element {
        const path = this.getPathFrom(config);
        return config[path];
    }

    private static buildRoute (
        config: RouteConfig
    ): ReactElement {
        const path = this.getPathFrom(config);
        const element = this.getElementFrom(config);
        return <Route key={path} path={path} element={element} />;
    }

    public static buildRoutes (
        configs: RouteConfig[]
    ): ReactElement[] {
        return configs.map(c => this.buildRoute(c));
    }

}