import type { Metadata } from "next";
import { dersler, type DersSlug } from "@/lib/dersler-data";
import DersDetayClient from "./ClientPage";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ders = dersler[params.slug as DersSlug];

  if (!ders) {
    return {
      title: "Ders Bulunamadı | OLUK",
      description: "İstenen ders sayfası bulunamadı.",
    };
  }

  return {
    title: `${ders.baslik} | OLUK Ders ${ders.id}`,
    description: `${ders.altBaslik} · ${ders.seanslar.length} seans · ${ders.sure}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <DersDetayClient params={params} />;
}
