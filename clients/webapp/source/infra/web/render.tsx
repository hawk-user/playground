import { BrowserRouter, Routes, StaticRouter } from 'react-router-dom';
import { type JSX, StrictMode } from 'react'
import { BaseRoute, type RouteConfig } from './base.route'

export class Render {

    public static client (
        configs: RouteConfig[]
    ): JSX.Element {
        return (
            <StrictMode>
                <BrowserRouter>
                    <Routes children={BaseRoute.buildRoutes(configs)} />
                </BrowserRouter>
            </StrictMode>
        )
    }

    public static server (
        url: string,
        configs: RouteConfig[]
    ): JSX.Element {
        return (
            <StaticRouter location={url}>
                <Routes children={BaseRoute.buildRoutes(configs)} />
            </StaticRouter>
        )
    }

}