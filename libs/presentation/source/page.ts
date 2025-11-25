import { TextUtilities } from '@libs/utils';

export interface Semantic {
    title: string;
}

export interface PageConfig<K> {
    isRoot?: boolean;
    view: K;
}

export class Page<T> {

    private readonly semantic: Semantic;
    private readonly config: PageConfig<T>;

    private constructor (
        semantic: Semantic,
        config: PageConfig<T>
    ) {
        this.semantic = semantic;
        this.config = config;
    }

    public static create<K> (
        semantic: Semantic,
        config: PageConfig<K>
    ): Page<K> {
        return new Page(semantic, config);
    }

    public getTitle (): string {
        return this.semantic.title;
    }

    public getView (): T {
        return this.config.view;
    }

    public getPath(): string {
        const { isRoot = false } = this.config;
        return isRoot ? '/' : TextUtilities.slugify(this.getTitle());
    }

}