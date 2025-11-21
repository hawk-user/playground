import ReactDomClient from 'react-dom/client';
import { pageRoutes } from './pages';
import { Render } from './infra/web';
import './index.css';

ReactDomClient.hydrateRoot(
    document.getElementById('root')!,
    Render.client(pageRoutes)
);