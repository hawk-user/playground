import ReactDomClient from 'react-dom/client';
import { pages } from './pages';
import { RenderMap } from './mappers';

ReactDomClient.hydrateRoot(
    document.getElementById('root')!,
    RenderMap.toClient(pages)
);