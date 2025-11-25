import { Page } from './page';

type PageConfigs<T> = {
    readonly [x: string]: Page<T>;
};

interface RouteFactoryProps<T> {
    key: string;
    path: string;
    layout: T;
}

type RouteFactory<T,K> = (
    props: RouteFactoryProps<T>
) => K;

export class PageRouter  {

    public static defineRoute<T> (
        page: Page<T>
    ): PageConfigs<T> {
        return { [page.getPath()]: page };
    }

    public static defineRoutes<T> (
        pages: Page<T>[]
    ): PageConfigs<T>[] {
        return pages.map(c => PageRouter.defineRoute<T>(c))
    }

    public static buildRoute<I, O>(
        page: Page<I>,
        routeFactory: RouteFactory<I, O>
    ): O {
        return routeFactory({
            key: page.getPath()!,
            path: page.getPath()!,
            layout: page.getLayout()
        });
    }

    public static buildRoutes<I, O> (
        pages: Page<I>[],
        routeFactory: RouteFactory<I, O>
    ): O[] {
        return pages.map(c => this.buildRoute(c, routeFactory));
    }

}