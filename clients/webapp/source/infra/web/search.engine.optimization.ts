import { useEffect } from 'react';

export interface SearchEngineOptimization {
    documentTitle: string;
}

type UsePageSEOProps = {
    seo: SearchEngineOptimization
}

export const UsePageSEO = (props: UsePageSEOProps) => {
    useEffect(() => {
        document.title = props.seo.documentTitle
    }, [document.title])
}