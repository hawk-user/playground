import { type JSX } from 'react';

export type PagePath = `/${string}`;

export class Page<
    Title extends string,
    PageElement extends JSX.Element,
> {

    private title: Title;
    private pageElement: PageElement
    private isFront: boolean;

    private constructor (
        title: Title,
        pageElement: PageElement,
        isFront: boolean = false
    ) {
        this.title = title;
        this.pageElement = pageElement;
        this.isFront = isFront;
    }

    public static create<
        Title extends string,
        PageElement extends JSX.Element
    > (
        title: Title,
        pageElement: PageElement,
        isFront: boolean = false
    ): Page<Title, PageElement> {
        return new Page(title, pageElement, isFront);
    }

    public getTitle (): Title {
        return this.title;
    }

    public getElement (): PageElement {
        return this.pageElement;
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