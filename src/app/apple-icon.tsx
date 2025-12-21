import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D4F4F 0%, #1A6B6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        {/* Üst Kavis */}
        <div
          style={{
            width: '120px',
            height: '30px',
            border: '8px solid #C9A962',
            borderBottom: 'none',
            borderRadius: '60px 60px 0 0',
            marginBottom: '-8px',
            display: 'flex',
          }}
        />
        
        {/* Ana Kanal */}
        <div
          style={{
            width: '32px',
            height: '80px',
            background: 'linear-gradient(180deg, #D4AF37 0%, #C9A962 100%)',
            borderRadius: '16px',
            display: 'flex',
          }}
        />
        
        {/* Alt Kavis */}
        <div
          style={{
            width: '120px',
            height: '30px',
            border: '8px solid #C9A962',
            borderTop: 'none',
            borderRadius: '0 0 60px 60px',
            marginTop: '-8px',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
