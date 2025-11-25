import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Page, PageRouter } from '@libs/presentation';

export class RenderMap {

    public static toClient (
        pages: Page<React.JSX.Element>[]
    ): React.JSX.Element {
        const routes = PageRouter.buildRoutes(pages, Route);
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes children={routes} />
                </BrowserRouter>
            </React.StrictMode>
        )
    }

}