'use client';

import { WarningCircle } from '@phosphor-icons/react';

interface DisclaimerSectionProps {
  text: string;
}

export default function DisclaimerSection({ text }: DisclaimerSectionProps) {
  return (
    <section className="py-12 px-4 bg-deep-teal-dark/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <WarningCircle size={32} weight="duotone" color="#D4A84B" className="flex-shrink-0" />
          <div>
            <h3 className="text-soft-cream font-semibold mb-3">Önemli Not</h3>
            <p className="text-soft-cream/80 text-sm leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
