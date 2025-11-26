import ReactDomClient from 'react-dom/client';
import { pages } from './pages';
import { PageMap } from './mappers';

ReactDomClient.hydrateRoot (
    document.getElementById('root')!,
    PageMap.toJsx(pages)
);