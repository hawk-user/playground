import { Layout } from '../../components';
import { type SearchEngineOptimization } from '../../types'

const Wip = () => <>...wip</>

export const FrontPageLayout = ({ seo }: { seo: SearchEngineOptimization }) => {
    return (
        <Layout seo={seo}>
            <><Wip/></>
        </Layout>
    ) 
};