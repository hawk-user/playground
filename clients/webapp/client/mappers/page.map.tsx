import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { type JSX, StrictMode } from 'react';
import { Page, PageRouter } from '@libs/presentation';
import { renderToStaticMarkup } from 'react-dom/server';

export class PageMap {

    public static toJsx (
        pages: Page<JSX.Element>[]
    ): JSX.Element {
        const routes = PageRouter.buildRoutes(pages, Route);
        return (
            <StrictMode>
                <BrowserRouter>
                    <Routes children={routes} />
                </BrowserRouter>
            </StrictMode>
        )
    }

     public static toHtmlString (
        page: Page<JSX.Element>,
        sourceFile: string = 'client.entry.ts'
    ): string {
        const html = renderToStaticMarkup(
            <html lang="fr">
                <head>
                    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                    <title>{page.getTitle()}</title>
                </head>
                <body>
                    <div id="root">{page.getLayout()}</div>
                    <script type="module" src={sourceFile}></script>
                </body>
            </html>
        );
        return `<!DOCTYPE html>${html}`;
    }

}