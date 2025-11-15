import { Page } from '../../components';
import { FrontPageLayout } from './layout';
import { frontPageSEO } from './seo';

const isFrontPage = true;
const { documentTitle } = frontPageSEO;

export const FrontPageDefinition = Page.create(
    documentTitle, <FrontPageLayout seo={frontPageSEO}/>, isFrontPage
);