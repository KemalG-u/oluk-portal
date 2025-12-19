import { dersler } from '@/lib/dersler-data';

export function generateStaticParams() {
  return Object.keys(dersler).map((slug) => ({
    slug,
  }));
}

export default function DersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
