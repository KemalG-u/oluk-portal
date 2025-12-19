import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dersler, type DersSlug } from '@/lib/dersler-data';
import { generateDersMetadata, generateCourseSchema } from '@/lib/seo';
import DersDetayClient from './page.client';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ders = dersler[params.slug as DersSlug];

  if (!ders) {
    return {
      title: 'Ders Bulunamadı',
      description: 'Aradığınız ders bulunamadı.',
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

export default function DersDetay({ params }: { params: { slug: string } }) {
  const ders = dersler[params.slug as DersSlug];

  if (!ders) {
    notFound();
  }

  // Generate Course Schema for JSON-LD
  const courseSchema = generateCourseSchema(
    params.slug,
    ders.baslik,
    ders.altBaslik,
    ders.giris,
    ders.seanslar
  );

  return (
    <>
      {/* JSON-LD Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      
      {/* Client Component */}
      <DersDetayClient params={params} />
    </>
  );
}

// Static generation için tüm ders slug'larını döndür
export async function generateStaticParams() {
  return Object.keys(dersler).map((slug) => ({
    slug,
  }));
}
