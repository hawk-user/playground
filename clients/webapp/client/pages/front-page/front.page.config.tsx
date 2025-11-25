import { type PageConfig } from '@libs/presentation';
import { type JSX } from 'react';
import { FrontPageLayout } from './front.page.layout';

export const frontPageConfig: PageConfig<JSX.Element> = {
    layout: <FrontPageLayout/>,
    isRoot: true
}
