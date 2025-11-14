import React from 'react';
import { createRoot } from 'react-dom/client';
import { FrontPageDefinition } from './pages/front-page';
import { RoutingService } from './infra/routing';
import './index.css';

const routes = [
    RoutingService.defineRoute(FrontPageDefinition)
];

const layout = document.getElementById('layout')!;

const node = (
    <React.StrictMode>
        { RoutingService.createRoutes(routes) }
    </React.StrictMode>
);

createRoot(layout).render(node);