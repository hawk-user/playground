import { Page } from '../../infra/routing';
import { FrontPageLayout } from './front.page.layout';

const title = 'Welcome to';
const isRootPage = true;

export const FrontPageDefinition = Page.create(
    title,
    <FrontPageLayout/>,
    isRootPage
);