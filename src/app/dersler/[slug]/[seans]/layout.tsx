import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dersler, type DersSlug } from '@/lib/dersler-data';
import { generateSeansMetadata } from '@/lib/seo';

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

type Props = {
  params: { slug: string; seans: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ders = dersler[params.slug as DersSlug];
  const seansId = parseInt(params.seans);
  
  if (!ders) {
    return {
      title: 'Ders Bulunamadı',
    };
  }

  const seans = ders.seanslar.find(s => s.id === seansId);
  
  if (!seans) {
    return {
      title: 'Seans Bulunamadı',
    };
  }

  return generateSeansMetadata(
    params.slug,
    ders.baslik,
    seansId,
    seans.baslik,
    seans.sure
  );
}

export default function SeansLayout({ children }: Props) {
  return children;
}
