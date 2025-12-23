// Kopya koruma: Sadece görseller ve özel içeriklerde
// Sağ tık, sürükle, kopyala engelleme
// Watermark ve yasal uyarı

import { useEffect } from "react";

export default function CopyProtection() {
  useEffect(() => {
    // Sağ tık engelle (sadece görsel üzerinde)
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.classList.contains("protected-content")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handler);

    // Sürükle engelle (görsel)
    const dragHandler = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.classList.contains("protected-content")) {
        e.preventDefault();
      }
    };
    document.addEventListener("dragstart", dragHandler);

    // Kopyala engelle (özel içerik)
    const copyHandler = (e: ClipboardEvent) => {
      const selection = window.getSelection();
      if (selection && selection.anchorNode) {
        const parent = (selection.anchorNode as HTMLElement).parentElement;
        if (parent && (parent.tagName === "IMG" || parent.classList.contains("protected-content"))) {
          e.preventDefault();
        }
      }
    };
    document.addEventListener("copy", copyHandler);

    return () => {
      document.removeEventListener("contextmenu", handler);
      document.removeEventListener("dragstart", dragHandler);
      document.removeEventListener("copy", copyHandler);
    };
  }, []);

  return null;
}
