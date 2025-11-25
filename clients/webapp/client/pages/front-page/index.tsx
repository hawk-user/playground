import { Page } from '@libs/presentation';
import { type JSX } from 'react';
import { frontPageConfig } from './front.page.config';
import { frontPageSemantic } from './front.page.semantic';

export const frontPage = Page.create<JSX.Element>(
    frontPageSemantic, frontPageConfig
);