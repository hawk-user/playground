import { type JSX } from 'react';

export type PagePath = `/${string}`;

export class Page<
    T extends string,
    E extends JSX.Element,
> {

    private title: T;
    private pageElem: E
    private isFront: boolean;

    private constructor (
        title: T,
        pageElem: E,
        isFront: boolean = false
    ) {
        this.title = title;
        this.pageElem = pageElem;
        this.isFront = isFront;
    }

    public static create<
        A extends string,
        N extends JSX.Element
    > (
        title: A,
        pageElem: N,
        isFront: boolean = false
    ): Page<A, N> {
        return new Page(title, pageElem, isFront);
    }

    public getTitle (): T {
        return this.title;
    }

    public getElement (): E {
        return this.pageElem;
    }

    private format (title: string): PagePath {
        return `/${title.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')}`
    }

    public getPath(): PagePath {
        return this.isFront ? '/' : this.format(this.getTitle());
    }

}