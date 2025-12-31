"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/moduller", label: "Modüller" },
  { href: "/sirdas", label: "Sırdaş" },
  { href: "/profil", label: "Profil" },
  { href: "/ayarlar", label: "Ayarlar" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-[#0D4F4F]/10 backdrop-blur-md shadow-[0_-6px_20px_-12px_rgba(0,0,0,0.2)] md:hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-5 text-center text-sm">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 flex flex-col items-center gap-1 ${active ? "text-[#0D4F4F] font-semibold" : "text-[#0D4F4F]/70"}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="h-1 w-1 rounded-full" style={{ opacity: active ? 1 : 0 }} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
