import { UsePageSEO } from '../../infra/web';

const Header = () => <>header</>
interface SearchEngineOptimization {
    documentTitle: string;
}

interface PageLayoutProps {
    seo: SearchEngineOptimization
}

export const FrontPageLayout = (props: PageLayoutProps) => {
    UsePageSEO(props)
    return <><Header/></>
};