import { Sparkles, Heart, Users, Coffee, Github } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 pb-20">
      <div className="doodle-border bg-white">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">❤️</div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">About Free Party Games</h3>
        </div>

        <div className="space-y-6">
          <div className="doodle-border bg-green-50">
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Why We Built This
            </h4>
            <p className="text-base sm:text-lg text-gray-700 font-bold leading-relaxed">
              We love playing party games with friends and family, but we were tired of apps that force you to pay, show annoying ads, or require login just to have fun. So we built Free Party Games - truly free games that respect your time and privacy.
            </p>
          </div>

          <div className="doodle-border bg-blue-50">
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Open Source & Free Forever
            </h4>
            <p className="text-base sm:text-lg text-gray-700 font-bold leading-relaxed">
              All our games are open source on GitHub. That means they're free forever, and anyone can contribute new word packs, translations, or even entire games! No catch, no premium tier, no hidden costs.
            </p>
          </div>

          <div className="doodle-border bg-purple-50">
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Privacy First
            </h4>
            <ul className="text-base sm:text-lg text-gray-700 font-bold space-y-2 leading-relaxed">
              <li>✅ No login required</li>
              <li>✅ No tracking or analytics (except basic GA4)</li>
              <li>✅ No data collection</li>
              <li>✅ No cookies (except necessary ones)</li>
              <li>✅ Your data stays on your device</li>
            </ul>
          </div>

          <div className="doodle-border bg-yellow-50">
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
              <Coffee className="w-6 h-6" />
              Support Us
            </h4>
            <p className="text-base sm:text-lg text-gray-700 font-bold mb-4 leading-relaxed">
              Free Party Games costs about $1.18/year to keep running (just the domain!). If you enjoy these games and want to help cover that cost or buy us a coffee, we'd be genuinely grateful!
            </p>
            <a
              href="https://buymeacoffee.com/freepartygames"
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn bg-yellow-300 text-gray-900 inline-flex items-center gap-2 text-base sm:text-lg"
            >
              <Coffee className="w-5 h-5" />
              Buy Us a Coffee
            </a>
          </div>

          <div className="doodle-border bg-gray-50">
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Contribute
            </h4>
            <p className="text-base sm:text-lg text-gray-700 font-bold mb-4 leading-relaxed">
              Want to add your own word packs or help build new games? We'd love your help! Check out our GitHub repo to get started.
            </p>
            <a
              href="https://github.com/freepartygames"
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn bg-gray-800 text-white inline-flex items-center gap-2 text-base sm:text-lg"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
