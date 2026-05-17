export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page">
      <div className="text-center">
        <h1 className="font-barlow font-black text-ink" style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}>
          404
        </h1>
        <p className="text-muted mt-4">
          <a href="/" className="text-accent hover:text-ink transition-colors font-semibold">
            ← Back home
          </a>
        </p>
      </div>
    </div>
  );
}
