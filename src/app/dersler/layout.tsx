import type { Metadata } from 'next';
import { derslerMetadata } from '@/lib/seo';

export const metadata: Metadata = derslerMetadata;

export default function DerslerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
