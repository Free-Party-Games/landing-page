import { Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t-4 border-black py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-2xl font-black text-gray-900 mb-2 flex items-center justify-center gap-2">
            Have fun and don't get caught! 👀
          </p>
          <div className="flex justify-center gap-2 text-3xl">
            <span className="wiggle">🎉</span>
            <span className="wiggle" style={{animationDelay: '0.2s'}}>🎊</span>
            <span className="wiggle" style={{animationDelay: '0.4s'}}>🎈</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 font-bold">
          <a href="mailto:hello@freepartygames.online" className="hover:text-gray-900 flex items-center gap-1">
            <Mail className="w-4 h-4" />
            Contact
          </a>
          <span>•</span>
          <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
          <span>•</span>
          <a href="https://github.com/free-party-games" className="hover:text-gray-900 flex items-center gap-1">
            <Github className="w-4 h-4" />
            Open Source
          </a>
        </div>

        <div className="text-center mt-6 text-gray-500 text-sm font-bold">
          © 2024 Free Party Games. Made with ❤️ for party people.
        </div>
      </div>
    </footer>
  );
}
