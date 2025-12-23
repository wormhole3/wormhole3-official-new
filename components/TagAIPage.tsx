import React from 'react';
import { ActionButton } from './Icons';
import { ArrowDown } from 'lucide-react';

export const TagAIPage: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
          Build community-driven mini apps, projects, small shops...
        </h1>
        <p className="font-hand text-lg sm:text-xl text-gray-600 max-w-3xl">
          A social distribution protocol powered by AI and social Prediction markets
        </p>
      </section>

      {/* Page 1: Reward community building and social interactions */}
      <section className="py-24 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">
              <span className="text-brand-600">Reward community building and social interactions</span>
            </h2>
            <p className="font-hand text-lg text-gray-600 max-w-3xl">
              Whether discussing products within the community, engaging with community content, or joining community-hosted Twitter Spaces, the contributors can earn community tokens.
            </p>
          </div>
          
          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full animate-fadeIn justify-center">
              {/* Left Section: Social Interaction & Content */}
              <div className="flex-1 flex flex-col gap-8">
                {/* Creator Post Box */}
                <div className="flex-1 sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-gray-700 shrink-0 border-2 border-gray-600">creator</div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="w-1/2 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 pl-14 mb-2">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                  </div>
                  <p className="text-brand-600 font-bold mt-2 pl-14">#TagAI #CommunityTag</p>
                </div>
                
                {/* Curator Interaction Box */}
                <div className="flex-1 sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-gray-700 shrink-0 border-2 border-gray-600">curator</div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-around">
                    <ActionButton icon={null} label="Like" />
                    <ActionButton icon={null} label="Reply" />
                    <ActionButton icon={null} label="Retweet" />
                    <ActionButton icon={null} label="Quote" />
                  </div>
                </div>
              </div>
              
              {/* Right Section: Token Distribution */}
              <div className="w-full lg:max-w-xs sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm relative pt-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">
                  token Distribute
                </div>
                <ul className="space-y-4 font-mono text-sm mt-4">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
                      <span>Musk</span>
                    </div>
                    <span className="text-brand-600 font-bold">1000</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
                      <span>Vitalik</span>
                    </div>
                    <span className="text-brand-600 font-bold">500</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
                      <span>Cz</span>
                    </div>
                    <span className="text-brand-600 font-bold">300</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
                      <span>Heyi</span>
                    </div>
                    <span className="text-brand-600 font-bold">1200</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
                      <span>Jesse</span>
                    </div>
                    <span className="text-brand-600 font-bold">800</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 2: Proof-of-Brain */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">
              <span className="text-brand-600">Proof-of-Brain</span>
            </h2>
            <p className="font-hand text-lg text-gray-600 max-w-3xl">
              The Proof-of-Brain algorithm distributes community tokens to creators and curators based on the social interactions from curators on the content published by creators, as well as their community credit data.
            </p>
          </div>
          
          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white min-h-[600px] relative">
            <div className="w-full animate-fadeIn">
              <div className="lg:relative w-full flex flex-col lg:block items-center justify-start gap-8 lg:min-h-[520px]">
                
                {/* --- MOBILE LAYOUT --- */}
                <div className="lg:hidden w-full flex flex-col items-center gap-6">
                  {/* Token Distribute */}
                  <div className="w-full max-w-xs sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm pt-8 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">token Distribute</div>
                    <ul className="space-y-1 font-mono text-sm mt-2">
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Musk</span><span className="font-bold text-brand-600">1000</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Vitalik</span><span className="font-bold text-brand-600">500</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Cz</span><span className="font-bold text-brand-600">300</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Heyi</span><span className="font-bold text-brand-600">1200</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Jesse</span><span className="font-bold text-brand-600">800</span></li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-2 font-hand text-purple-500"><ArrowDown size={24} /> ② reward <ArrowDown size={24} /></div>

                  {/* Creator */}
                  <div className="w-full max-w-md sketch-border border-2 border-gray-600 p-6 bg-white shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-hand font-bold shrink-0 border-2 border-gray-600">creator</div>
                      <div className="w-full space-y-2"><div className="h-3 w-1/2 bg-gray-400 rounded-full"></div></div>
                    </div>
                    <div className="pl-14 space-y-2 mb-2">
                      <div className="h-2 w-full bg-gray-300 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-gray-300 rounded-full"></div>
                    </div>
                    <p className="font-bold text-brand-600 pl-14 mb-4">#TagAI #CommunityTag</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Like</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Reply</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Retweet</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Quote</button>
                    </div>
                  </div>
                  
                  <div className="w-px h-8 border-l-2 border-dashed border-purple-400"></div>
                  
                  {/* Curator */}
                  <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center font-hand font-bold text-xl text-white shadow-lg border-2 border-gray-600">curator</div>
                  
                  <div className="w-px h-8 bg-gray-300"></div>

                  {/* Community Credit */}
                  <div className="w-full max-w-sm sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm pt-8 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">Community credit</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs mt-2">
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Twitter re- <span className="font-bold">5%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Token hold <span className="font-bold">50%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Social Token <span className="font-bold">25%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Curation Graph <span className="font-bold">20%</span></div>
                    </div>
                  </div>
                </div>

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden lg:block w-full h-full">
                  {/* Token Distribute Box */}
                  <div className="absolute top-0 left-8 w-[280px] sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm pt-8">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">token Distribute</div>
                    <ul className="space-y-1 font-mono text-sm mt-2">
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Musk</span><span className="font-bold text-brand-600">1000</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Vitalik</span><span className="font-bold text-brand-600">500</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Cz</span><span className="font-bold text-brand-600">300</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Heyi</span><span className="font-bold text-brand-600">1200</span></li>
                      <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-200"></div><span className="flex-1">Jesse</span><span className="font-bold text-brand-600">800</span></li>
                    </ul>
                  </div>

                  {/* Creator Box */}
                  <div className="absolute top-0 right-8 w-[420px] sketch-border border-2 border-gray-600 p-6 bg-white shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-hand font-bold shrink-0 border-2 border-gray-600">creator</div>
                      <div className="w-full space-y-2"><div className="h-3 w-1/2 bg-gray-400 rounded-full"></div></div>
                    </div>
                    <div className="pl-14 space-y-2 mb-2">
                      <div className="h-2 w-full bg-gray-300 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-gray-300 rounded-full"></div>
                    </div>
                    <p className="font-bold text-brand-600 pl-14 mb-4">#TagAI #CommunityTag</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Like</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Reply</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Retweet</button>
                      <button className="flex items-center gap-1 text-white transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-purple-500">Quote</button>
                    </div>
                  </div>
                  
                  {/* Curator Circle */}
                  <div className="absolute top-[280px] right-[200px] w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center font-hand font-bold text-xl text-white shadow-lg border-2 border-gray-600">curator</div>

                  {/* Community Credit Box */}
                  <div className="absolute bottom-8 right-[73px] w-[350px] sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm pt-8">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">Community credit</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs mt-2">
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Twitter re- <span className="font-bold">5%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Token hold <span className="font-bold">50%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Social Token <span className="font-bold">25%</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-300"></div>Curation Graph <span className="font-bold">20%</span></div>
                    </div>
                  </div>

                  {/* Arrows SVG Overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 520">
                    <defs>
                      <marker id="arrowhead-tagai-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#c084fc" />
                      </marker>
                    </defs>
                    {/* Arrow from token Distribute to creator - ending at Creator box (left edge) */}
                    <path d="M 172 80 C 400 100, 500 80, 548 100" stroke="#c084fc" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-tagai-purple)" />
                    <text x="360" y="90" className="font-hand font-bold text-lg fill-purple-500" transform="rotate(-5 360 90)">② reward</text>
                    {/* Arrow from token Distribute to curator - ending at Curator circle edge */}
                    <path d="M 172 150 C 400 250, 600 300, 704 328" stroke="#c084fc" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-tagai-purple)" />
                    <text x="450" y="280" className="font-hand font-bold text-lg fill-purple-500" transform="rotate(10 450 280)">② reward</text>
                    {/* Arrow from curator to Like button (Social interaction) - starting from top of Curator circle, ending at Like button */}
                    <path d="M 752 280 C 800 240, 880 200, 920 200" stroke="#c084fc" strokeWidth="3" strokeDasharray="8,8" fill="none" markerEnd="url(#arrowhead-tagai-purple)" />
                    <text x="820" y="240" className="font-hand font-bold text-lg fill-purple-500" transform="rotate(-8 820 240)">① Social interaction</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};