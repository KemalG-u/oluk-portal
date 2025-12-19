import type { Metadata } from 'next';
import { derslerMetadata } from '@/lib/seo';

export const metadata: Metadata = derslerMetadata;

export { default } from './page.client';
