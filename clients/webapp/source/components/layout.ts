import { useSEO } from '../effects';
import { type SearchEngineOptimization } from '../types';
import { type ReactNode } from 'react';

export interface LayoutProps {
    seo?: SearchEngineOptimization,
    children?: ReactNode
}

export function Layout ({ seo, children }: LayoutProps): ReactNode {
    if(seo) useSEO(seo);
    return children;
}