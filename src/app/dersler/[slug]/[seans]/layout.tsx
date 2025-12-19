import { dersler, type DersSlug } from '@/lib/dersler-data';

export function generateStaticParams() {
  const paths: Array<{ slug: string; seans: string }> = [];
  
  // Her ders için tüm seansları üret
  Object.keys(dersler).forEach((slug) => {
    const ders = dersler[slug as DersSlug];
    ders.seanslar.forEach((seans) => {
      paths.push({
        slug,
        seans: seans.id.toString(),
      });
    });
  });
  
  return paths;
}

export default function SeansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
