import { type JSX, type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export type RoutePath = `/${string}`;

export type RouteConfig<P extends RoutePath = RoutePath> = {
    readonly [K in P]: JSX.Element;
};

export class RoutingService {

    public static defineRoute<P extends RoutePath, T extends P>(path: T, element: JSX.Element): RouteConfig<T> {
        return { [path]: element } as { [K in T]: JSX.Element };
    }

    public static getPathFrom<P extends RoutePath>(config: RouteConfig<P>): P {
        const [key] = Object.keys(config) as [P];
        return key;
    }

    public static getElementFrom<P extends RoutePath>(config: RouteConfig<P>): JSX.Element {
        const path = this.getPathFrom(config);
        return config[path];
    }

    private static buildRoute<P extends RoutePath>(config: RouteConfig<P>): ReactElement {
        const path = this.getPathFrom(config);
        const element = this.getElementFrom(config);
        return <Route key={path} path={path} element={element} />;
    }

    private static buildRoutes(routeConfigs: RouteConfig[]): ReactElement[] {
        return routeConfigs.map((config) => this.buildRoute(config));
    }

    public static createRoutes(routeConfigs: RouteConfig[]): JSX.Element {
        const routes = this.buildRoutes(routeConfigs);
        return (
            <BrowserRouter>
                <Routes children={routes}/>
            </BrowserRouter>
        );
    }
}