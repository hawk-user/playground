import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { SayHello } from './hello';
import { PreRendered } from './pre.rendered';
import './layout.css';

const sayHelloContainer = document.getElementById('say-hello')!;
const sayHelloNode = (<React.StrictMode><SayHello/></React.StrictMode>);
createRoot(sayHelloContainer).render(sayHelloNode);

const preRenderedContainer = document.getElementById('pre-rendered')!;
const preRenderedNode = (<React.StrictMode><PreRendered/></React.StrictMode>);
hydrateRoot(preRenderedContainer, preRenderedNode);