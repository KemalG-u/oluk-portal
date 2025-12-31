import type { Metadata } from 'next';
import { amacData } from '@/lib/amac-data';
import BolumPage, { generateMetadata as baseBolumMetadata } from './[bolum]/page';
import BolumDersPage, { generateMetadata as baseDersMetadata } from './[bolum]/ders/page';
import SeansPage, { generateMetadata as baseSeansMetadata } from './[bolum]/seans-[seansNo]/page';

const fallbackBolum = amacData.bolumler[0]?.slug ?? 'anlam-arayisi';

function getBolumSlugByOrder(order: number) {
  return amacData.bolumler.find((b) => b.order === order)?.slug ?? fallbackBolum;
}

export function createBolumPage(order: number) {
  const bolumSlug = getBolumSlugByOrder(order);

  async function generateMetadata(): Promise<Metadata> {
    return baseBolumMetadata({ params: { bolum: bolumSlug } });
  }

  function Page() {
    return <BolumPage params={{ bolum: bolumSlug }} />;
  }

  return { generateMetadata, Page };
}

export function createDersPage(order: number) {
  const bolumSlug = getBolumSlugByOrder(order);

  async function generateMetadata(): Promise<Metadata> {
    return baseDersMetadata({ params: { bolum: bolumSlug } });
  }

  function Page() {
    return <BolumDersPage params={{ bolum: bolumSlug }} />;
  }

  return { generateMetadata, Page };
}

export function createSeansPage(order: number, seansOrder: number) {
  const bolumSlug = getBolumSlugByOrder(order);
  const bolum = amacData.bolumler.find((b) => b.slug === bolumSlug);
  const seansIndex = Math.max(0, seansOrder - 1);
  const seansExists = !!bolum?.seans?.[seansIndex];
  const seansNo = seansExists ? String(seansOrder) : '1';

  async function generateMetadata(): Promise<Metadata> {
    return baseSeansMetadata({ params: { bolum: bolumSlug, seansNo } });
  }

  function Page() {
    return <SeansPage params={{ bolum: bolumSlug, seansNo }} />;
  }

  return { generateMetadata, Page };
}
