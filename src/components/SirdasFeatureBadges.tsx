'use client';

import { 
  ShieldCheck, 
  Brain, 
  Plant, 
  Lightning 
} from '@phosphor-icons/react';

interface FeatureBadge {
  icon: string;
  title: string;
  description: string;
}

interface FeatureBadgesProps {
  badges: FeatureBadge[];
}

export default function SirdasFeatureBadges({ badges }: FeatureBadgesProps) {
  const iconMap: Record<string, any> = {
    'ShieldCheck': ShieldCheck,
    'Brain': Brain,
    'Plant': Plant,
    'Lightning': Lightning,
  };

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {badges.map((badge, i) => {
        const IconComponent = iconMap[badge.icon];
        
        return (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {IconComponent && (
              <IconComponent size={40} weight="duotone" color="#C9A962" className="mb-3" />
            )}
            <h3 className="text-soft-cream font-semibold mb-2">{badge.title}</h3>
            <p className="text-soft-cream/70 text-sm">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
}
