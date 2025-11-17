import ReactDomClient from 'react-dom/client';
import { pageConfigs } from './pages';
import { Render } from './infra/web';
import './index.css';

ReactDomClient.hydrateRoot(
    document.getElementById('root')!,
    Render.client(pageConfigs)
);