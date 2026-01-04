export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30">
      <div className="absolute top-10 left-10 text-4xl float">🎉</div>
      <div className="absolute top-20 right-20 text-3xl float" style={{animationDelay: '0.5s'}}>✨</div>
      <div className="absolute bottom-20 left-20 text-3xl float" style={{animationDelay: '1s'}}>🎈</div>
      <div className="absolute bottom-10 right-10 text-4xl float" style={{animationDelay: '1.5s'}}>🎊</div>
      <div className="absolute top-1/2 left-1/4 text-2xl float" style={{animationDelay: '0.8s'}}>⭐</div>
      <div className="absolute top-1/3 right-1/3 text-2xl float" style={{animationDelay: '1.2s'}}>🎪</div>
    </div>
  );
}
