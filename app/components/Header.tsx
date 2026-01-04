import { Github, Coffee } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl wiggle">🎮</div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
                Free Party Games
              </h1>
              <p className="text-sm text-gray-700 font-bold">No Ads • No Login • No Paywalls</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://github.com/freepartygames" 
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn bg-gray-800 text-white flex items-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://buymeacoffee.com/freepartygames" 
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-btn bg-yellow-300 text-gray-900 flex items-center gap-2 text-sm"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
