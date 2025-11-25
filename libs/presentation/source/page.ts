import { TextUtilities } from '@libs/utils';
import { type PageConfig, type Semantic } from './contracts';

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

    public getLayout (): T {
        return this.config.layout;
    }

    public getPath(): string {
        const { isRoot = false } = this.config;
        return isRoot ? '/' : TextUtilities.slugify(this.getTitle());
    }

}