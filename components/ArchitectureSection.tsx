import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from 'lucide-react';
import { SocialIcon, SteemLogo, Logo, PixelPLogo, PurpleArchLogo, ActionButton } from './Icons';

// A shared component for the main diagram stack used in tabs 2 and 3
const MainDiagramStack = () => (
  <div className="flex flex-col items-center gap-8 w-full max-w-lg">
    <div className="w-full bg-gray-200 border-2 border-black rounded-2xl h-28 px-4 sm:px-10 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <span className="font-hand font-bold text-xl sm:text-2xl">Social DA Layer</span>
      <div className="flex gap-2 sm:gap-6"><SteemLogo className="w-10 h-10 sm:w-14 sm:h-14" /><PurpleArchLogo className="w-10 h-10 sm:w-14 sm:h-14" /></div>
    </div>
    <div className="flex justify-around w-full px-10"><ArrowUp size={32} /><ArrowDown size={32} /></div>
    <div className="w-full bg-purple-300 border-2 border-black rounded-2xl h-28 px-4 sm:px-10 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 sm:gap-4"><Logo className="w-10 h-10 sm:w-14 sm:h-14" /><span className="font-hand font-bold text-lg sm:text-2xl">Social Oracle & Account</span></div>
      <PixelPLogo className="w-10 h-10 sm:w-14 sm:h-14" />
    </div>
    <div className="flex justify-around w-full px-10"><ArrowUp size={32} /><ArrowDown size={32} /></div>
    <div className="w-full bg-white border-2 border-black rounded-[3rem] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 sm:gap-4"><div className="px-4 py-2 rounded-full border-2 border-black bg-gray-200 font-hand font-bold italic">creator</div></div>
        <div className="bg-black text-white p-2 rounded-lg"><span className="font-bold text-xl sm:text-2xl">𝕏</span></div>
      </div>
      <div className="bg-purple-300 border-2 border-black px-4 sm:px-10 py-3 rounded-2xl flex gap-4 sm:gap-8 font-mono text-xl sm:text-2xl font-bold justify-center shadow-sm my-4">
        <span>#</span><span>@</span><span>$</span><span>🔗</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <div className="px-4 py-2 rounded-full border-2 border-black bg-gray-200 font-hand font-bold italic">curator</div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <ActionButton label="Like" icon={null} /><ActionButton label="Reply" icon={null} /><ActionButton label="Retweet" icon={null} /><ActionButton label="Quote" icon={null} />
        </div>
      </div>
    </div>
  </div>
);

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: '01', title: 'Web2 Compatible', text: 'Web3 social accounts compatible with Web2 social platforms, enabling users to use social media platforms as on-chain control panels.' },
    { id: '02', title: 'Data Transmission', text: 'A native social data transmission layer that allows users to perform blockchain operations natively on social media platforms and store social data in a distributed manner.' },
    { id: '03', title: 'Value Layer', text: 'A native "value layer" for social media platforms, allowing web2 users to easily combine content with smart contracts using #, @, $, 🔗, and more.' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-6 animate-fadeIn">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 border-2 border-black rounded-2xl w-48 h-28 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative p-2"><span className="font-hand font-bold text-base absolute top-2 left-4">Social Media</span><div className="mt-4 bg-black text-white p-2 rounded-lg"><span className="font-bold text-2xl">𝕏</span></div></div>
              <div className="flex items-center gap-2 font-hand font-bold text-lg"><ArrowDown size={24} /> API</div>
              <div className="bg-purple-300 border-2 border-black rounded-2xl w-56 h-28 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative p-2"><span className="font-hand font-bold text-base absolute top-2 left-4">Social Oracle</span><div className="mt-4 flex items-center gap-2"><Logo className="w-8 h-8" /><span className="font-sans font-bold text-lg">Wormhole3</span></div></div>
            </div>
            <div className="flex lg:flex-col justify-center items-center gap-4 py-4 lg:py-0 lg:h-56 lg:justify-end">
              <div className="flex items-center gap-2 font-hand font-bold text-lg"><ArrowLeft size={24} className="hidden lg:block" />Authorize</div>
              <div className="flex items-center gap-2 font-hand font-bold text-lg">post<ArrowRight size={24} /></div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              <div className="bg-white border-2 border-black rounded-lg p-3 font-hand font-bold w-full text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">X authorization login</div>
              <ArrowDown size={24} />
              <div className="bg-purple-400 border-2 border-black rounded-lg p-3 font-hand font-bold w-full text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">Private key signature</div>
              <ArrowDown size={24} />
              <div className="bg-gray-200 border-2 border-black rounded-[2rem] p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative w-full flex items-center justify-between gap-3"><div className="absolute -top-3 right-4 font-hand text-sm text-gray-800 font-bold bg-gray-200 px-2 border-2 border-black rounded-lg">social DA</div><div className="bg-purple-400 border-2 border-black rounded-xl w-full py-2 font-hand font-bold text-center text-white">Private key _ social</div><SteemLogo className="w-10 h-10 shrink-0" /></div>
            </div>
          </div>
        );
      case 1:
        return (
            <div className="w-full flex flex-col items-center justify-center gap-8 lg:gap-12 animate-fadeIn relative">
                <MainDiagramStack />
            </div>
        );
      case 2:
        return (
          <div className="w-full animate-fadeIn">
            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-center gap-16 relative h-[600px]">
              <MainDiagramStack />
              <div className="w-64 h-32 bg-gray-200 border-2 border-black rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center p-2 shrink-0">
                  <span className="font-hand font-bold text-lg">Smart Contract</span>
                  <span className="font-hand text-base italic">"Combine with # and @"</span>
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 950 600">
                  <defs>
                    <marker id="arrowhead-arch" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="black" /></marker>
                    <marker id="arrowhead-arch-left" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="10 0, 0 3.5, 10 7" fill="black" /></marker>
                  </defs>
                  <path d="M 530 70 L 770 70 L 770 250" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-arch)" />
                  <text x="650" y="60" className="font-hand font-bold text-lg">Call</text>
                  <path d="M 530 530 L 770 530 L 770 350" stroke="black" strokeWidth="2" fill="none" markerStart="url(#arrowhead-arch-left)" />
              </svg>
            </div>
            {/* Mobile View */}
            <div className="w-full lg:hidden flex flex-col items-center gap-8 animate-fadeIn">
              <MainDiagramStack />
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 font-hand font-bold text-lg">Call <ArrowDown size={24}/></div>
                <div className="w-64 h-32 bg-gray-200 border-2 border-black rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center p-2"><span className="font-hand font-bold text-lg">Smart Contract</span><span className="font-hand text-base italic">"Combine with # and @"</span></div>
                <div className="flex items-center gap-2 font-hand font-bold text-lg"><ArrowUp size={24}/></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-hand text-5xl mb-4">Highlight</h2>
          <p className="font-hand text-lg text-gray-600 max-w-3xl mx-auto">
            {tabs[activeTab].text}
          </p>
        </div>
        <div className="flex flex-wrap justify-center border-b-2 border-gray-100 mb-12 font-hand text-lg">
          {tabs.map((tab, idx) => (
            <button key={tab.id} onClick={() => setActiveTab(idx)} className={`pb-4 px-4 sm:px-8 transition-colors relative ${activeTab === idx ? 'text-gray-900 font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
              <div className="flex items-baseline gap-2"><span className={`${activeTab === idx ? 'text-purple-500' : ''}`}>{tab.title}</span><span className="font-mono text-xl">{tab.id}</span></div>
              <div className={`h-1 w-full mt-1 transition-all duration-200 ${activeTab === idx ? 'bg-purple-500' : 'bg-transparent'}`}></div>
            </button>
          ))}
        </div>
        <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white min-h-[600px] flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};