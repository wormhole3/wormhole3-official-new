import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from 'lucide-react';
import { SocialIcon, SteemLogo, Logo, PixelPLogo, PurpleArchLogo, ActionButton } from './Icons';

// A shared component for the main diagram stack used in the Highlight section
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
      
      {/* Representing the text content of a post */}
      <div className="space-y-2 mb-4 px-2">
        <div className="h-2 w-full bg-gray-100 rounded-full"></div>
        <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
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

// New component for the Community Credit diagram
const CommunityCreditDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl animate-fadeIn">
    {/* Left: Pie Chart */}
    <div className="sketch-border border-2 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full max-w-sm aspect-square flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {/* 
            Pie chart math:
            Radius 20, strokeWidth 40 => fills circle from r=0 to r=40.
            Circumference = 2 * PI * 20 ≈ 125.66
        */}
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="#3B82F6" strokeWidth="40" strokeDasharray="50.27 125.66" /> {/* 40% */}
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="#F97316" strokeWidth="40" strokeDasharray="37.70 125.66" strokeDashoffset="-50.27" /> {/* 30% */}
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="#EF4444" strokeWidth="40" strokeDasharray="18.85 125.66" strokeDashoffset="-87.97" /> {/* 15% */}
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="#10B981" strokeWidth="40" strokeDasharray="12.57 125.66" strokeDashoffset="-106.82" /> {/* 10% */}
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="#065F46" strokeWidth="40" strokeDasharray="6.28 125.66" strokeDashoffset="-119.39" /> {/* 5% */}
        
        {/* Outer border */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="2" />
      </svg>
      
      {/* Percentage Labels */}
      <div className="absolute inset-0 pointer-events-none font-hand font-bold text-xs sm:text-sm text-white drop-shadow-md sm:drop-shadow-none sm:text-black">
          <span className="absolute top-[40%] right-[35%]">40.0%</span>
          <span className="absolute bottom-[28%] left-[42%]">30.0%</span>
          <span className="absolute bottom-[45%] left-[22%]">15.0%</span>
          <span className="absolute top-[30%] left-[30%]">10.0%</span>
          <span className="absolute top-[22%] left-[46%]">5.0%</span>
      </div>
    </div>

    {/* Right: List */}
    <div className="sketch-border border-2 border-black p-6 sm:p-10 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
      <h3 className="font-hand font-bold text-2xl sm:text-3xl text-center mb-8">Community credit</h3>
      <div className="space-y-6 font-hand text-lg sm:text-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-500 border border-black"></div>
            <span>Token hold</span>
          </div>
          <span className="font-bold">800</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-orange-500 border border-black"></div>
            <span>Twitter re- (by AI)</span>
          </div>
          <span className="font-bold">600</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500 border border-black"></div>
            <span>Social Token</span>
          </div>
          <span className="font-bold">300</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-teal-500 border border-black"></div>
            <span>Ip token hold</span>
          </div>
          <span className="font-bold">200</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-emerald-800 border border-black"></div>
            <span>Curation Graph</span>
          </div>
          <span className="font-bold">100</span>
        </div>
      </div>
    </div>
  </div>
);

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: '01', title: 'Web3 social account', text: 'Web3 social accounts compatible with Web2 social platforms, enabling users to use social media platforms as on-chain control panels.' },
    { id: '02', title: 'Social Lego combination', text: 'A native "value layer" for social media platforms, allowing web2 users to easily combine content with smart contracts using #, @, $, 🔗, and more.' }
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
          <h2 className="font-hand text-5xl mb-4">Post as Protocol</h2>
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
