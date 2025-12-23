import React from 'react';

export const ComposableCommunityCredit: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-hand text-4xl sm:text-5xl mb-4">Composable Community credit</h2>
          <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
            Based on an account's on-chain data and AI-scored social account reputation, we enable communities to define their own composable on-chain credit. Community credit enables Lego-style composability across the protocols within the Wormhole3 ecosystem.
          </p>
        </div>

        <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
          <div className="sketch-border border-2 border-gray-600 p-4 sm:p-8 bg-white">
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto animate-fadeIn">
              {/* Left: Weight configuration panel */}
              <div className="bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-gray-900 w-full max-w-3xl flex flex-col overflow-hidden">
                {/* Tabs */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-gray-300 text-xs sm:text-sm font-hand">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-black font-bold border-2 border-black">Community credit</span>
                  </div>
                  <button className="px-3 py-1 rounded-full bg-amber-500 text-black font-bold border-2 border-black text-xs">Configure pool</button>
                </div>

                <div className="flex flex-col lg:flex-row flex-1">
                  {/* Triangle chart */}
                  <div className="w-full lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 px-4 sm:px-6 py-6 flex flex-col items-center justify-center gap-6">
                    <div className="w-full max-w-[180px] aspect-square relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* inner triangle only */}
                        <polygon
                          points="50,25 22,78 78,78"
                          fill="#FBBF2433"
                          stroke="#FBBF24"
                          strokeWidth="1.5"
                        />
                        {/* Vertex percentage labels */}
                        <text x="50" y="18" textAnchor="middle" className="font-hand font-bold text-[10px] sm:text-xs fill-gray-900">
                          40%
                        </text>
                        <text x="14" y="82" textAnchor="start" className="font-hand font-bold text-[10px] sm:text-xs fill-gray-900">
                          45%
                        </text>
                        <text x="86" y="82" textAnchor="end" className="font-hand font-bold text-[10px] sm:text-xs fill-gray-900">
                          15%
                        </text>
                      </svg>
                    </div>
                  </div>

                  {/* Weight rows */}
                  <div className="w-full lg:w-2/3 px-4 sm:px-6 py-4 flex flex-col gap-3 text-xs sm:text-sm font-hand">
                    {/* Row 1 */}
                    <div className="bg-gray-100 rounded-2xl border-2 border-gray-300 px-4 py-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[11px] sm:text-xs text-gray-700">
                        <span>Social influence &amp; curation graph (40%)</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black border-2 border-black text-[10px] font-bold">
                          Twitter Reputation NFT
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full w-2/3 bg-amber-400"></div>
                        </div>
                        <div className="w-20 flex items-center justify-between bg-black rounded-full px-3 py-1 text-[10px] text-white">
                          <span>100</span>
                          <span className="text-gray-300">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-gray-100 rounded-2xl border-2 border-gray-300 px-4 py-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[11px] sm:text-xs text-gray-700">
                        <span>Community economic participation (Including staking, LP token holding, and more) (45%)</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black border-2 border-black text-[10px] font-bold">
                          Stake APO
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full w-1/2 bg-amber-400"></div>
                        </div>
                        <div className="w-20 flex items-center justify-between bg-black rounded-full px-3 py-1 text-[10px] text-white">
                          <span>100</span>
                          <span className="text-gray-300">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Row 3 - NFT or Token holding */}
                    <div className="bg-gray-100 rounded-2xl border-2 border-gray-300 px-4 py-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[11px] sm:text-xs text-gray-700">
                        <span>NFT or Token holding (15%)</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black border-2 border-black text-[10px] font-bold">
                          NFT Reputation
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full w-1/3 bg-amber-400"></div>
                        </div>
                        <div className="w-20 flex items-center justify-between bg-black rounded-full px-3 py-1 text-[10px] text-white">
                          <span>33</span>
                          <span className="text-gray-300">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Hint line */}
                    <div className="mt-1 text-[10px] text-right text-gray-500">
                      ... more dimensions can be added as needed by the community
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Community credit summary */}
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
                      <span>lp token hold or staking</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};


