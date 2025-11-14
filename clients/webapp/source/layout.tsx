import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FrontPageDefinition } from './pages/front-page';
import { RoutingService } from './infra/routing';
import './layout.css';

const routes = [
    RoutingService.defineRoute(FrontPageDefinition)
];

const layout = document.getElementById('layout')!;

const node = (
    <StrictMode>
        { RoutingService.createRoutes(routes) }
    </StrictMode>
);

createRoot(layout).render(node);