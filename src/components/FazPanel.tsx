import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/modern-cards.css';

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface FazPanelProps {
  open: boolean;
  onClose: () => void;
  faz: number;
  title: string;
  slogan: string;
  symbol: React.ReactNode;
  color: string;
  highlight?: string;
  opening?: string;
  body?: string;
  features?: Feature[];
  cta?: string;
  footer?: string;
  locked?: boolean;
  placeholderMsg?: string;
}

const panelVariants = {
  hidden: { right: '-550px', transition: { duration: 0.5 } },
  visible: { right: 0, transition: { duration: 0.5 } },
};

export const FazPanel: React.FC<FazPanelProps> = ({
  open,
  onClose,
  faz,
  title,
  slogan,
  symbol,
  color,
  highlight,
  opening,
  body,
  features,
  cta,
  footer,
  locked,
  placeholderMsg,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`panel-backdrop${open ? ' active' : ''}`}
        onClick={onClose}
        style={{ zIndex: 999 }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className="side-panel"
            style={{ zIndex: 1000, background: 'linear-gradient(180deg, #0D4F4F 0%, #062828 100%)', maxWidth: '95vw', width: 550 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
          >
            <div className="panel-header" style={{ position: 'relative', padding: '50px 40px 40px', overflow: 'hidden' }}>
              <div className="panel-header-bg" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.1) 0%, transparent 100%)' }} />
              <button className="panel-close" style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44, border: '1px solid rgba(201, 169, 98, 0.3)', background: 'rgba(0,0,0,0.2)', borderRadius: '50%', color, fontSize: 24, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={onClose} aria-label="Kapat">×</button>
              <div className="panel-header-content" style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
                <div className="panel-symbol" style={{ width: 70, height: 70, margin: '0 auto 20px' }}>{symbol}</div>
                <div className="panel-label" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 3, color, marginBottom: 10 }}>Faz {faz}</div>
                <h2 className="panel-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 600, letterSpacing: 4, marginBottom: 12, color: '#F5F0E6' }}>{title}</h2>
                <p className="panel-tagline" style={{ fontSize: 18, fontStyle: 'italic', color: 'rgba(245, 240, 230, 0.7)' }}>{slogan}</p>
              </div>
            </div>
            <div className="panel-body" style={{ padding: 40 }}>
              {locked ? (
                <div style={{ textAlign: 'center', color: '#C9A962', fontSize: 20, margin: '60px 0' }}>
                  <svg width="48" height="48" viewBox="0 0 32 32" style={{ marginBottom: 16 }}>
                    <circle cx="16" cy="16" r="14" fill="#0D4F4F" stroke="#C9A962" strokeWidth="2" />
                    <rect x="10" y="16" width="12" height="7" rx="3" fill="#C9A962" />
                    <rect x="13" y="12" width="6" height="7" rx="3" fill="#F5F0E6" />
                  </svg>
                  <div>{placeholderMsg || 'Bu bölüm yakında açılacak.'}</div>
                </div>
              ) : (
                <>
                  {opening && <div className="opening-quote" style={{ fontSize: 17, lineHeight: 1.9, color: 'rgba(245, 240, 230, 0.9)', marginBottom: 32, paddingLeft: 20, borderLeft: '2px solid rgba(201, 169, 98, 0.4)' }}>{opening}</div>}
                  {highlight && <div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.12) 0%, rgba(201, 169, 98, 0.04) 100%)', border: '1px solid rgba(201, 169, 98, 0.2)', borderRadius: 16, padding: '24px 28px', marginBottom: 32, textAlign: 'center' }}><p style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#C9A962', fontWeight: 500 }}>{highlight}</p></div>}
                  {body && <div className="body-text" style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(245, 240, 230, 0.85)', marginBottom: 32 }}>{body}</div>}
                  {features && (
                    <div className="features-grid" style={{ display: 'grid', gap: 16, marginBottom: 36 }}>
                      {features.map((f, i) => (
                        <div className="feature-item" key={i} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: 'rgba(0, 0, 0, 0.2)', borderRadius: 12, border: '1px solid rgba(201, 169, 98, 0.1)', transition: 'all 0.3s' }}>
                          <div className="feature-icon" style={{ width: 40, height: 40, background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.2) 0%, rgba(201, 169, 98, 0.05) 100%)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{f.icon}</div>
                          <div className="feature-content">
                            <h4 style={{ fontSize: 15, fontWeight: 600, color: '#F5F0E6', marginBottom: 4 }}>{f.title}</h4>
                            <p style={{ fontSize: 13, color: 'rgba(245, 240, 230, 0.6)', lineHeight: 1.5 }}>{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {cta && (
                    <div className="cta-section" style={{ textAlign: 'center', paddingTop: 20 }}>
                      <button className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, width: '100%', padding: '20px 40px', background: 'linear-gradient(135deg, #C9A962 0%, #a88a4a 100%)', border: 'none', borderRadius: 14, color: '#0D4F4F', fontSize: 16, fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', transition: 'all 0.3s' }}>
                        <span>{cta}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="panel-footer" style={{ padding: '24px 40px', background: 'rgba(0, 0, 0, 0.2)', borderTop: '1px solid rgba(201, 169, 98, 0.1)' }}>
              <p className="footer-quote" style={{ fontSize: 14, color: 'rgba(245, 240, 230, 0.5)', textAlign: 'center', fontStyle: 'italic' }}>{footer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
