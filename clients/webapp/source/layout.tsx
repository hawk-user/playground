import React from 'react';
import { createRoot } from 'react-dom/client';
import { SayHello } from './hello';
import { RoutingService } from './infra/routing';
import './layout.css';

const helloRoute = RoutingService.defineRoute('/', <SayHello/>);
const layout = document.getElementById('layout')!;

const node = (
    <React.StrictMode>
        {RoutingService.createRoutes([helloRoute])}
    </React.StrictMode>);

createRoot(layout).render(node);