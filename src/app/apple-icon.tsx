import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #0D4F4F 0%, #1A6B6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C9A962',
          fontWeight: 'bold',
          fontFamily: 'serif',
          borderRadius: '20%',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
