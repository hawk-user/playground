import React from 'react';
import ReactDomClient from 'react-dom/client';
import { FrontPageDefinition } from './pages/front-page';
import { RoutingService } from './infra/web';
import './index.css';

const routes = [
    RoutingService.defineRoute(FrontPageDefinition)
];

const container = document.getElementById('root')!;

const initialChildren = (
    <React.StrictMode>
        { RoutingService.createRoutes(routes) }
    </React.StrictMode>
);

ReactDomClient.hydrateRoot(container, initialChildren);