export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-light to-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        <p className="text-teal font-serif text-lg">Yükleniyor...</p>
      </div>
    </div>
  );
}
