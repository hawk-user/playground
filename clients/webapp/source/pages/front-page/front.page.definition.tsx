import { Page } from '../../infra/routing';
import { FrontPageLayout } from './front.page.layout';

const title = 'Welcome to';
const isFrontPage = true;

export const FrontPageDefinition = Page.create(
    title,
    <FrontPageLayout/>,
    isFrontPage
);