import React from 'react';
import { Logo } from './Icons';
import { Twitter, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Logo and copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 opacity-50">
            <Logo className="w-6 h-6 grayscale" />
            <span className="font-bold text-gray-600">Wormhole3</span>
          </div>
          <div className="text-sm text-gray-400 font-hand">
            © {new Date().getFullYear()} Wormhole3. Connecting Worlds.
          </div>
        </div>

        {/* Right side: Social links */}
        <div className="flex items-center gap-4">
          <a href="https://x.com/wormhole_3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">X</span>
          </a>
          <a href="https://t.me/wormhole3i" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
            <Send className="w-5 h-5" />
            <span className="sr-only">Telegram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};