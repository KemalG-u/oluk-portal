
import type { Metadata } from 'next';
import SirSecimiClient from './ClientPage';

export const metadata: Metadata = {
  title: 'Sır Seçimi | OLUK',
  description: 'Elementini seç, sırrına isim ver ve OLUK yolculuğuna başla.',
};

export default function Page() {
  return <SirSecimiClient />;
}
