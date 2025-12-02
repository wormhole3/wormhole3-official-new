import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-white to-white opacity-60"></div>
      
      <h1 className="font-hand text-5xl sm:text-6xl md:text-7xl mb-8 text-gray-900 leading-tight">
        A <span className="text-brand-600">Wormhole</span> Connect <br className="hidden sm:block" /> Web2 and Web3
      </h1>

      <div className="max-w-2xl mx-auto space-y-4 font-hand text-lg sm:text-xl text-gray-600 mb-12">
        <p>Web2 users can seamlessly participate in Web3.</p>
        <p>Builders can easily create community-driven mini apps.</p>
        <p>Billions of people worldwide can easily enjoy online and offline life services, just like WeChat users.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 font-hand text-lg">
        <a href="https://tagai.fun/" target="_blank" rel="noopener noreferrer" className="sketch-border border-2 border-gray-800 px-8 py-3 hover:bg-gray-50 hover:scale-105 transition-transform">
          Launch TagAI
        </a>
        <a href="https://donut.blog/" target="_blank" rel="noopener noreferrer" className="sketch-border border-2 border-gray-800 px-8 py-3 hover:bg-gray-50 hover:scale-105 transition-transform">
          Launch Donut
        </a>
      </div>
    </section>
  );
};