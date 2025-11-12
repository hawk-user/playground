import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')
const node = (<StrictMode><App/></StrictMode>);

createRoot(container!).render(node);