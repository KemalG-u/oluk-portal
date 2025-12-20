import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
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
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
