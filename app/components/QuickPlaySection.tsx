export default function QuickPlaySection() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 pb-20">
      <div className="doodle-border bg-white">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">Quick Play</h3>
          <p className="text-lg text-gray-700 font-bold">
            Not sure what to play? We'll pick a random game for you!
          </p>
        </div>

        <div className="space-y-4">
          <button className="doodle-btn bg-green-400 text-gray-900 w-full text-xl">
            Random Game 🎲
          </button>
          
          <div className="text-center text-gray-600 font-bold">OR</div>
          
          <button className="doodle-btn bg-purple-300 text-gray-900 w-full text-xl">
            Short Game (&lt;20 min) ⚡
          </button>
          
          <button className="doodle-btn bg-orange-300 text-gray-900 w-full text-xl">
            Long Game (&gt;30 min) ⏰
          </button>
        </div>
      </div>
    </section>
  );
}
