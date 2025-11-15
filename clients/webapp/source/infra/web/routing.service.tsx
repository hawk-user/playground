import { type JSX, type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page, type PagePath } from '../../components';

export type RouteConfig = {
    readonly [x: string]: JSX.Element;
};

export class RoutingService {

    public static defineRoute (
        page: Page<string, JSX.Element>
    ): RouteConfig {
        return { [page.getPath()]: page.getElement() };
    }

    public static getPathFrom<P extends PagePath> (config: RouteConfig): P {
        const [key] = Object.keys(config) as [P];
        return key;
    }

    public static getElementFrom (config: RouteConfig): JSX.Element {
        const path = this.getPathFrom(config);
        return config[path];
    }

    private static buildRoute (config: RouteConfig): ReactElement {
        const path = this.getPathFrom(config);
        const element = this.getElementFrom(config);
        return <Route key={path} path={path} element={element} />;
    }

    private static buildRoutes (routeConfigs: RouteConfig[]): ReactElement[] {
        return routeConfigs.map((config) => this.buildRoute(config));
    }

    public static createRoutes (routeConfigs: RouteConfig[]): JSX.Element {
        const routes = this.buildRoutes(routeConfigs);
        return (
            <BrowserRouter>
                <Routes children={routes}/>
            </BrowserRouter>
        );
    }

}