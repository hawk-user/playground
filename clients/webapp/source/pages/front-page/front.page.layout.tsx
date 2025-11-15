import { UsePageSEO, type SearchEngineOptimization } from '../../infra/web';

const Wip = () => <>...wip</>

interface PageLayoutProps {
    seo: SearchEngineOptimization
}

export const FrontPageLayout = (props: PageLayoutProps) => {
    UsePageSEO(props);
    return <><Wip/></>;
};