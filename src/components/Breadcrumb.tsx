"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const LABEL_MAP: Record<string, string> = {
  moduller: "Modüller",
  ayna: "AYNA",
  isik: "IŞIK",
  baglanti: "BAĞLANTI",
  amac: "AMAÇ",
  dersler: "Dersler",
  sirdas: "Sırdaş",
  profil: "Profil",
  ayarlar: "Ayarlar",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  let accumulated = "";

  return (
    <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-[#0D4F4F]/80" aria-label="breadcrumb">
      <div className="flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-[#0D4F4F] font-semibold">
          Anasayfa
        </Link>
        {segments.map((seg, idx) => {
          accumulated += `/${seg}`;
          const isLast = idx === segments.length - 1;
          const label = LABEL_MAP[seg] || decodeURIComponent(seg);

          return (
            <Fragment key={accumulated}>
              <span className="text-[#0D4F4F]/50">›</span>
              {isLast ? (
                <span className="text-[#0D4F4F] font-semibold">{label}</span>
              ) : (
                <Link href={accumulated} className="hover:text-[#0D4F4F]">
                  {label}
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
}
