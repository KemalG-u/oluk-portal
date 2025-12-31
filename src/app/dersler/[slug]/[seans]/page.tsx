import type { Metadata } from "next";
import { seansIcerikleri } from "./seans-data";
import SeansDetayClient from "./ClientPage";

export async function generateMetadata({ params }: { params: { slug: string; seans: string } }): Promise<Metadata> {
  const dersSeanslar = seansIcerikleri[params.slug];
  const seans = dersSeanslar?.[parseInt(params.seans)];

  if (!seans) {
    return {
      title: "Seans Bulunamadı | OLUK",
      description: "İstenen seans içeriği bulunamadı.",
    };
  }

  return {
    title: `${seans.baslik} | OLUK Seans ${params.seans}`,
    description: seans.aciklama.slice(0, 140),
  };
}

export default function Page({ params }: { params: { slug: string; seans: string } }) {
  return <SeansDetayClient params={params} />;
}
