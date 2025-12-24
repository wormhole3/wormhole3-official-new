import React, { useState } from 'react';
import { Heart, Repeat, Quote, MessageSquare, ArrowRight } from 'lucide-react';
import { ActionButton } from './Icons';

export const ScenarioSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 0,
      title: 'Social Trading',
      desc: 'Users can like or comment and conduct cryptocurrency transactions.',
    },
    {
      id: 1,
      title: 'Social Prediction Market',
      desc: 'Attach a real-time "market consensus price" to every post on X, enabling community members to use community tokens to participate in social prediction markets and express their views on community matters.',
    },
    {
      id: 2,
      title: 'Social Distribution',
      desc: 'Distribute community tokens during daily discussions based on Proof-of-Brain.',
    },
    {
      id: 3,
      title: 'Social Sharing',
      desc: 'Issue social tokens (IPShare) that can be traded via links/hashtags.',
    },
    {
      id: 4,
      title: 'Initial Staking Offering',
      desc: 'A fair launch based on the hundreds-of-billions-dollar staking economy and millions of stakers. Staking rewards automatically provide a liquidity pool for project or community tokens, and stakers receive tokens per block.',
    }
  ];

  return (
    <section id="scenarios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-hand text-5xl mb-4 text-gray-900">Application Scenario</h2>
        <p className="font-hand text-gray-600 max-w-2xl mb-12 text-lg">
          {scenarios[activeScenario].desc}
        </p>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center sm:justify-start border-b-2 border-gray-100 mb-12 font-hand text-lg">
          {scenarios.map((scenario, idx) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(idx)}
              className={`pb-4 px-4 sm:px-8 transition-colors relative ${
                activeScenario === idx 
                  ? 'text-brand-600 font-bold' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="block mb-1">{scenario.title}</span>
              <span className="text-xs font-sans opacity-50 block text-center">0{idx + 1}</span>
              {activeScenario === idx && (
                <div className="absolute bottom-[-2px] left-0 right-0 h-1 bg-brand-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-3xl border-2 border-gray-800 p-6 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-500 min-h-[400px] flex items-center justify-center">
          
          {/* SCENARIO 1: TRADING */}
          {activeScenario === 0 && (
            <div className="flex flex-col md:flex-row gap-8 items-center w-full animate-fadeIn">
              {/* Creator Tweet */}
              <div className="w-full md:w-1/2 sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                   <div className="flex flex-col">
                      <div className="w-20 h-3 bg-gray-800 rounded-full mb-1"></div>
                      <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                   </div>
                </div>
                <div className="space-y-2 mb-6">
                   <div className="w-full h-2 bg-gray-200 rounded"></div>
                   <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-between mt-4 gap-2">
                  <ActionButton icon={Heart} label="Like" />
                  <ActionButton icon={MessageSquare} label="Reply" />
                  <ActionButton icon={Repeat} label="Retweet" />
                  <ActionButton icon={Quote} label="Quote" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-gray-400">
                 <div className="h-1 w-16 bg-gray-400 rounded-full hidden md:block"></div>
                 <ArrowRight className="md:hidden rotate-90" />
              </div>

              {/* Interaction Result */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                 <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-8 h-8 bg-brand-200 rounded-full"></div>
                       <span className="font-hand font-bold text-gray-700">Curator</span>
                    </div>
                    <p className="font-hand text-lg">buy <span className="text-brand-600 font-bold">$token</span> with a like</p>
                 </div>
                 
                 <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-8 h-8 bg-brand-200 rounded-full"></div>
                       <span className="font-hand font-bold text-gray-700">Creator</span>
                    </div>
                    <p className="font-hand text-lg">
                      @TagAIDAO tip *** <span className="text-brand-600 font-bold">$token</span> to @elonmusk
                    </p>
                 </div>
              </div>
            </div>
          )}

          {/* SCENARIO 2: PREDICTION MARKET (NEW) */}
          {activeScenario === 1 && (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full animate-fadeIn">
              
              {/* Left Side: Creator 01 + A Pool */}
              <div className="flex flex-col gap-6 w-full max-w-sm">
                {/* Tweet Card */}
                <div className="sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm flex flex-col justify-between h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-sm text-center leading-tight border border-black text-gray-700">creator<br/>01</div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="font-hand text-xl mb-6">Bitcoin will flip gold.</div>
                    <div className="flex justify-between gap-1">
                        <div className="bg-[#C4B5FD] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Like</div>
                        <div className="bg-[#C4B5FD] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Reply</div>
                        <div className="bg-[#C4B5FD] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Retweet</div>
                        <div className="bg-[#C4B5FD] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Quote</div>
                    </div>
                </div>

                {/* Pool A */}
                <div className="relative pt-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#C4B5FD] border-2 border-black rounded-lg px-8 py-2 font-hand font-bold z-10 w-3/4 text-center shadow-sm">
                        A Pool
                    </div>
                    <div className="sketch-border border-2 border-black bg-white p-6 pt-8 text-center font-hand text-lg shadow-sm">
                        Stake community or project tokens to predict outcomes
                    </div>
                </div>
              </div>

              {/* VS */}
              <div className="font-hand text-4xl font-bold italic text-gray-800">VS</div>

              {/* Right Side: Creator 02 + B Pool */}
              <div className="flex flex-col gap-6 w-full max-w-sm">
                {/* Tweet Card */}
                <div className="sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm flex flex-col justify-between h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-sm text-center leading-tight border border-black text-gray-700">creator<br/>02</div>
                        <div className="flex flex-col gap-2 w-full">
                             <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
                             <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="font-hand text-xl mb-6">Gold is the biggest threat to Bitcoin.</div>
                    <div className="flex justify-between gap-1">
                        <div className="bg-[#E879F9] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Like</div>
                        <div className="bg-[#E879F9] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Reply</div>
                        <div className="bg-[#E879F9] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Retweet</div>
                        <div className="bg-[#E879F9] border border-black rounded px-2 py-1 text-xs font-bold font-hand">Quote</div>
                    </div>
                </div>

                {/* Pool B */}
                <div className="relative pt-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#E879F9] border-2 border-black rounded-lg px-8 py-2 font-hand font-bold z-10 w-3/4 text-center shadow-sm">
                        B Pool
                    </div>
                    <div className="sketch-border border-2 border-black bg-white p-6 pt-8 text-center font-hand text-lg shadow-sm">
                        Stake community or project tokens to predict outcomes
                    </div>
                </div>
              </div>

            </div>
          )}

          {/* SCENARIO 3: DISTRIBUTION */}
          {activeScenario === 2 && (
            <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full animate-fadeIn justify-center">
              {/* Panel 1: Creator */}
              <div className="w-full lg:flex-1 sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-gray-700 shrink-0">creator</div>
                      <div className="flex flex-col gap-2 w-full">
                          <div className="w-1/2 h-3 bg-gray-800 rounded-full"></div>
                      </div>
                  </div>
                  <div className="space-y-2 pl-2 mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                  </div>
                  <p className="text-brand-600 font-bold mt-2 pl-2">#TagAI #CommunityTag</p>
              </div>

              {/* Panel 2: Curator */}
              <div className="w-full lg:flex-1 sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-gray-700 shrink-0">curator</div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-around">
                      <ActionButton icon={Heart} label="Like" />
                      <ActionButton icon={MessageSquare} label="Reply" />
                      <ActionButton icon={Repeat} label="Retweet" />
                      <ActionButton icon={Quote} label="Quote" />
                  </div>
              </div>

              {/* Panel 3: Token Distribution */}
              <div className="w-full lg:max-w-xs sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm relative pt-8">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 border-2 border-gray-600 rounded-lg font-hand font-bold text-sm">
                      token Distribute
                  </div>
                  <ul className="space-y-4 font-mono text-sm mt-4">
                      <li className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span>Musk</span>
                          </div>
                          <span className="text-brand-600 font-bold">1000</span>
                      </li>
                      <li className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span>Vitalik</span>
                          </div>
                          <span className="text-brand-600 font-bold">500</span>
                      </li>
                      <li className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span>Cz</span>
                          </div>
                          <span className="text-brand-600 font-bold">300</span>
                      </li>
                      <li className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span>Heyi</span>
                          </div>
                          <span className="text-brand-600 font-bold">1200</span>
                      </li>
                      <li className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span>Jesse</span>
                          </div>
                          <span className="text-brand-600 font-bold">800</span>
                      </li>
                  </ul>
              </div>
            </div>
          )}

          {/* SCENARIO 4: SHARING (IPShare) */}
          {activeScenario === 3 && (
            <div className="flex flex-col lg:flex-row gap-8 items-center w-full animate-fadeIn relative">
              <div className="flex flex-col md:flex-row items-center gap-4">
                 <div className="bg-gray-200 rounded-full px-6 py-2 font-hand font-bold shadow-md">Personal IP</div>
                 <ArrowRight />
                 <div className="w-64 h-48 border-2 border-black bg-white rounded-xl p-4 relative">
                    <div className="absolute top-2 left-2 bg-gray-200 text-[10px] px-2 rounded">Social Token_IPShare</div>
                    {/* Bonding Curve */}
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                       <path d="M 10 90 L 90 90" stroke="black" strokeWidth="2" />
                       <path d="M 10 90 L 10 10" stroke="black" strokeWidth="2" />
                       <path d="M 10 90 Q 50 80 90 10" stroke="#8B5CF6" strokeWidth="3" fill="none" />
                    </svg>
                 </div>
              </div>

              <div className="h-0.5 w-16 bg-gray-800 my-4 lg:my-0"></div>

              <div className="w-full max-w-md sketch-border border-2 border-gray-600 p-6 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                     <span className="font-hand font-bold">Creator</span>
                  </div>
                  <div className="space-y-2 mb-4">
                     <div className="h-2 w-full bg-gray-100 rounded"></div>
                     <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                  
                  <button className="w-full border-2 border-brand-500 text-brand-600 font-bold py-2 rounded-lg mb-4 hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
                     Token Swap Button <span className="text-xl">🔗</span>
                  </button>

               </div>
            </div>
          )}

          {/* SCENARIO 5: INITIAL STAKING OFFERING */}
          {activeScenario === 4 && (
            <div className="w-full animate-fadeIn">
              <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
                <div className="relative w-full max-w-5xl mx-auto min-h-[420px]">
                  <svg viewBox="0 0 1000 420" className="w-full h-full">
                    <defs>
                      <marker id="arrow-dark-iso" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3a3a3a" />
                      </marker>
                      <marker id="arrow-orange-iso" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#f29900" />
                      </marker>
                    </defs>

                    {/* Circles */}
                    <circle cx="150" cy="140" r="65" fill="#fff" stroke="#000" strokeWidth="3" />
                    <circle cx="470" cy="140" r="70" fill="#fff" stroke="#000" strokeWidth="3" />
                    <circle cx="800" cy="140" r="65" fill="#f6e7d1" stroke="#000" strokeWidth="3" />

                    {/* Arrow: Post Token (staker -> pos) */}
                    <line x1="215" y1="140" x2="400" y2="140" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark-iso)" />
                    {/* Arrow: Post Token (pos -> validator) */}
                    <line x1="540" y1="140" x2="730" y2="140" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark-iso)" />
                    {/* Arrow: Provider Fee (pos -> validator) */}
                    <line x1="540" y1="170" x2="730" y2="170" stroke="#f29900" strokeWidth="3" markerEnd="url(#arrow-orange-iso)" />
                    {/* Arrow: Staking Reward (pos -> DAO Treasury) */}
                    <line x1="520" y1="190" x2="690" y2="300" stroke="#f29900" strokeWidth="3" markerEnd="url(#arrow-orange-iso)" />
                    {/* Arrow: token (DAO Treasury -> staker) */}
                    <line x1="520" y1="300" x2="250" y2="210" stroke="#f29900" strokeWidth="2" strokeDasharray="10 10" markerEnd="url(#arrow-orange-iso)" />

                    {/* Labels on arrows */}
                    <text x="290" y="120" className="font-hand text-sm fill-gray-700">Post Token</text>
                    <text x="620" y="120" className="font-hand text-sm fill-gray-700">Post Token</text>
                    <text x="625" y="160" className="font-hand text-sm fill-[#f29900]">Provider Fee</text>
                    <text x="560" y="245" className="font-hand text-sm fill-[#f29900]">Staking Reward</text>
                    <text x="310" y="245" className="font-hand text-sm fill-[#f29900]">token</text>

                    {/* Text inside circles */}
                    <text x="150" y="145" textAnchor="middle" className="font-hand text-xl fill-black">Staker</text>
                    <text x="470" y="135" textAnchor="middle" className="font-hand text-xl fill-black">PoS</text>
                    <text x="470" y="162" textAnchor="middle" className="font-hand text-xl fill-black">Chain</text>
                    <text x="800" y="135" textAnchor="middle" className="font-hand text-lg fill-black">validator</text>
                    <text x="800" y="160" textAnchor="middle" className="font-hand text-lg fill-black">operator</text>

                    {/* Bottom boxes */}
                    <rect x="380" y="300" width="200" height="60" rx="12" fill="#f4a23a" stroke="#000" strokeWidth="3" />
                    <rect x="580" y="300" width="200" height="60" rx="12" fill="#f4a23a" stroke="#000" strokeWidth="3" />
                    <text x="480" y="336" textAnchor="middle" className="font-hand text-lg fill-black">Project or Community</text>
                    <text x="680" y="336" textAnchor="middle" className="font-hand text-lg fill-black">DAO Treasury</text>
                  </svg>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
