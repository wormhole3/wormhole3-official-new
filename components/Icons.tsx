import React from 'react';
import { ArrowRight, Twitter, Instagram, Music, MessageCircle, Database, Key, Box, Cpu, Share2, MessageSquare, Heart, Repeat, Quote } from 'lucide-react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#8B5CF6" />
    <circle cx="50" cy="50" r="15" fill="#FFFFFF" opacity="0.5" />
    <circle cx="75" cy="25" r="8" fill="#FFFFFF" />
  </svg>
);

export const SocialIcon = ({ platform, className = "w-6 h-6" }: { platform: string, className?: string }) => {
  switch (platform) {
    case 'X': return <div className={`bg-black text-white p-1 rounded-md flex items-center justify-center ${className}`}><span className="font-bold text-xs">𝕏</span></div>;
    case 'Instagram': return <div className={`bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-1 rounded-md ${className}`}><Instagram size={14} /></div>;
    case 'TikTok': return <div className={`bg-black text-white p-1 rounded-md ${className}`}><Music size={14} /></div>;
    case 'Reddit': return <div className={`bg-orange-500 text-white p-1 rounded-full ${className}`}><MessageCircle size={14} /></div>;
    default: return <div className={`bg-gray-200 p-1 rounded ${className}`}>?</div>;
  }
};

export const SteemLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
    STEEM
  </div>
);

export const ArweaveLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-black rounded-sm flex items-center justify-center text-white font-bold text-[8px] shadow-lg`}>
    <div className="border border-white p-0.5 w-6 h-6 flex items-center justify-center rounded-full">
       <div className="w-4 h-4 border border-white transform rotate-45"></div>
    </div>
  </div>
);

export const LensLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-[#abfe2c] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg font-mono border-4 border-black`}>
    P
  </div>
);

export const PixelPLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-white overflow-hidden`}>
    <span className="text-[#ccff00] font-mono font-bold text-xl leading-none" style={{ fontFamily: 'monospace' }}>P</span>
  </div>
);

export const YellowBoxLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-[#1a1a1a] rounded flex items-center justify-center shadow-lg border border-gray-700`}>
      <div className="w-5 h-5 border-2 border-yellow-500 rotate-45"></div>
  </div>
);

export const PurpleArchLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-[#8B5CF6] rounded flex items-center justify-center shadow-lg`}>
      <div className="w-5 h-5 border-t-4 border-l-4 border-r-4 border-white rounded-t-full"></div>
  </div>
);

export const ChainLogo = ({ name, color }: { name: string, color: string }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-sm ${color}`}>
    {name.substring(0, 3).toUpperCase()}
  </div>
);

export const ActionButton = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <button className="flex items-center gap-1 text-gray-500 hover:text-brand-600 transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-white">
    {/* <Icon size={12} /> */}
    <span>{label}</span>
  </button>
);