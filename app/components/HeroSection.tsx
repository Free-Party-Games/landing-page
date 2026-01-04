export default function HeroSection() {
  return (
    <section className="relative py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Party characters */}
        <div className="flex justify-center items-center gap-4 mb-8">
            <img src="/charades.svg" alt="Free Party Games Logo" className="h-64"/>
        
            <div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-4">
                Party Games
                </h2>
                <p className="text-2xl sm:text-4xl font-bold text-gray-700 mb-8">
                For Loud Laughs and Sneaky Lies
                </p>
            </div>

            <img src="/spy.svg" alt="Free Party Games Logo" className="h-64"/>

        </div>

        <div className="doodle-border inline-block mb-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-gray-900">100%</div>
              <div className="text-sm font-bold text-gray-700">Free</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-black text-gray-900">0</div>
              <div className="text-sm font-bold text-gray-700">Ads</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-black text-gray-900">∞</div>
              <div className="text-sm font-bold text-gray-700">Fun</div>
            </div>
          </div>
        </div>

        <div>
          <a
            href="#games"
            className="doodle-btn bg-green-400 text-gray-900 text-xl inline-block"
          >
            Start Playing →
          </a>
        </div>
      </div>
    </section>
  );
}
