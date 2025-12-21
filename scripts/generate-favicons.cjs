#!/usr/bin/env node

/**
 * OLUK Favicon Generator
 * Tüm boyutlarda PNG favicon'lar oluşturur
 */

const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

function drawOlukIcon(ctx, size) {
  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, size, size);
  bgGrad.addColorStop(0, '#0D4F4F');
  bgGrad.addColorStop(1, '#1A6B6B');
  
  // Rounded rectangle background
  const radius = size * 0.176;
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, radius);
  ctx.fill();
  
  // Gold gradient
  const goldGrad = ctx.createLinearGradient(0, 0, size, size);
  goldGrad.addColorStop(0, '#D4AF37');
  goldGrad.addColorStop(1, '#C9A962');
  
  const scale = size / 512;
  const strokeWidth = 40 * scale;
  
  // Üst kavis
  ctx.strokeStyle = goldGrad;
  ctx.lineWidth = strokeWidth;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.moveTo(150 * scale, 180 * scale);
  ctx.quadraticCurveTo(256 * scale, 120 * scale, 362 * scale, 180 * scale);
  ctx.stroke();
  
  // Ana kanal (rectangle yerine path kullan)
  ctx.globalAlpha = 1;
  ctx.fillStyle = goldGrad;
  const channelRadius = 30 * scale;
  const x = 226 * scale;
  const y = 180 * scale;
  const w = 60 * scale;
  const h = 200 * scale;
  
  ctx.beginPath();
  ctx.moveTo(x + channelRadius, y);
  ctx.lineTo(x + w - channelRadius, y);
  ctx.arcTo(x + w, y, x + w, y + channelRadius, channelRadius);
  ctx.lineTo(x + w, y + h - channelRadius);
  ctx.arcTo(x + w, y + h, x + w - channelRadius, y + h, channelRadius);
  ctx.lineTo(x + channelRadius, y + h);
  ctx.arcTo(x, y + h, x, y + h - channelRadius, channelRadius);
  ctx.lineTo(x, y + channelRadius);
  ctx.arcTo(x, y, x + channelRadius, y, channelRadius);
  ctx.fill();
  
  // Alt kavis
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = goldGrad;
  ctx.beginPath();
  ctx.moveTo(150 * scale, 380 * scale);
  ctx.quadraticCurveTo(256 * scale, 440 * scale, 362 * scale, 380 * scale);
  ctx.stroke();
  
  // Akış noktaları
  ctx.fillStyle = '#F5F0E6';
  
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  ctx.arc(256 * scale, 220 * scale, 12 * scale, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(256 * scale, 280 * scale, 12 * scale, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(256 * scale, 340 * scale, 12 * scale, 0, Math.PI * 2);
  ctx.fill();
}

console.log('🎨 OLUK Favicon Generator başlatılıyor...\n');

sizes.forEach(({ size, name }) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  drawOlukIcon(ctx, size);
  
  const buffer = canvas.toBuffer('image/png');
  const path = `${__dirname}/../public/${name}`;
  
  fs.writeFileSync(path, buffer);
  console.log(`✅ ${name} (${size}x${size}) oluşturuldu`);
});

console.log('\n✨ Tüm favicon\'lar başarıyla oluşturuldu!');
console.log('📁 Konum: public/');
