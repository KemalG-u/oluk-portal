import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'OLUK | Spiritüel Dönüşüm Platformu',
  description: "Arınma, koruma ve aktivasyon ile içsel dönüşüm yolculuğun. Türkiye'nin kapsamlı spiritüel gelişim platformu.",
}

export default function HomePage() {
  return <HomeClient />
}
