import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dersler, type DersSlug } from '@/lib/dersler-data';
import { generateDersMetadata, generateCourseSchema } from '@/lib/seo';

export function generateStaticParams() {
  return Object.keys(dersler).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ders = dersler[params.slug as DersSlug];
  
  if (!ders) {
    return {
      title: 'Ders Bulunamadı',
    };
  }

  return generateDersMetadata(
    params.slug,
    ders.baslik,
    ders.altBaslik,
    ders.giris,
    ders.seanslar.length
  );
}

export default function DersLayout({ children, params }: Props) {
  const ders = dersler[params.slug as DersSlug];
  
  if (!ders) {
    notFound();
  }

  const courseSchema = generateCourseSchema(
    params.slug,
    ders.baslik,
    ders.altBaslik,
    ders.giris,
    ders.seanslar.map(s => ({ id: s.id, baslik: s.baslik, sure: s.sure }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
