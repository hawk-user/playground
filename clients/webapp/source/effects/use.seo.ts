import { useEffect } from 'react';
import { type SearchEngineOptimization } from '../types';

export const useSEO = (seo: SearchEngineOptimization) => {
    useEffect(() => {
        document.title = seo.documentTitle
    }, [document.title])
}