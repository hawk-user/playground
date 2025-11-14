import { Page } from '../../infra/web';
import { FrontPageLayout } from './front.page.layout';
import { frontPageSEO } from './front.page.seo';


const isFrontPage = true;
const { documentTitle } = frontPageSEO;

export const FrontPageDefinition = Page.create(
    documentTitle, <FrontPageLayout seo={frontPageSEO}/>, isFrontPage
);