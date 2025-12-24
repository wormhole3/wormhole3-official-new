import React from 'react';
import { ActionButton } from './Icons';
import { ArrowRight } from 'lucide-react';

const BondingCurveChart = () => (
  <div className="w-64 h-48 border-2 border-black bg-white rounded-xl p-4 relative shrink-0">
    <div className="absolute top-2 left-2 bg-gray-200 text-[10px] px-2 rounded-lg font-hand font-bold border border-gray-400">Social Token_IPShare</div>
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <path d="M 10 90 L 95 90" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead-donut)" />
      <path d="M 10 90 L 10 5" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead-donut)" />
      <path d="M 10 90 Q 50 80 90 10" stroke="#8B5CF6" strokeWidth="3" fill="none" />
    </svg>
  </div>
);

export const DonutPage: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn">
      <svg className="absolute w-0 h-0">
        <defs>
          <marker id="arrowhead-donut" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="black" />
          </marker>
        </defs>
      </svg>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
          Social Token and Social Sharing
        </h1>
        <p className="font-hand text-lg sm:text-xl text-gray-600 max-w-3xl">
          Create social tokens to capture every bit of value you generate.
        </p>
      </section>

      {/* Social Token Section */}
      <section className="py-24 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Token</h2>
            <p className="font-hand text-lg text-gray-600 max-w-3xl mx-auto">
              Create your social token, <span className="font-bold text-gray-800">token_IPShare</span>, allowing anyone to support or invest in you by holding it.
            </p>
          </div>
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white min-h-[400px] flex items-center justify-center">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="sketch-border border-2 border-gray-600 rounded-full px-8 py-3 font-hand font-bold text-xl bg-gray-100">Personal IP</div>
                <ArrowRight size={32} strokeWidth={2} className="transform rotate-90 md:rotate-0" />
                <BondingCurveChart />
             </div>
          </div>
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Sharing</h2>
            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
              Share mini-apps, projects, or small shops on social media networks, and the earnings will to buy back your personal IPShare.
            </p>
          </div>
          
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white flex items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-8 items-center w-full justify-center">
              {/* Creator Card */}
              <div className="w-full max-w-md sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">creator</div>
                     <div className="space-y-2 w-1/2">
                       <div className="h-3 w-full bg-gray-800 rounded-full"></div>
                     </div>
                  </div>
                  <div className="space-y-2 mb-4 ml-14">
                     <div className="h-2 w-full bg-gray-100 rounded"></div>
                     <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                  
                  <div className="w-full border-2 border-gray-600 text-gray-700 font-bold py-2 rounded-lg mb-4 flex items-center justify-center gap-2 font-hand text-lg bg-gray-50">
                     token swap button or <span className="text-2xl">🔗</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-end">
                    <ActionButton icon={null} label="Like" />
                    <ActionButton icon={null} label="Reply" />
                    <ActionButton icon={null} label="Retweet" />
                    <ActionButton icon={null} label="Quote" />
                  </div>
               </div>
               
               {/* Arrow */}
               <div className="flex items-center gap-2 font-hand text-lg font-bold transform lg:rotate-0 rotate-90">
                  <div className="w-16 h-0.5 bg-black"></div>
                  <ArrowRight size={24} strokeWidth={2} />
                  <span>buy back</span>
               </div>
               
               {/* Bonding Curve */}
               <BondingCurveChart />
            </div>
          </div>
        </div>
      </section>

      {/* Composable Community credit Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">Composable Community credit</h2>
            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
              Participants&apos; staking activities within the community can serve as a component of community credit and play a role in community credit–based distribution scenarios.
            </p>
          </div>

          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto">
              {/* Left: Pie Chart */}
              <div className="sketch-border border-2 border-black p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full max-w-sm aspect-square flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#E5E7EB" strokeWidth="40" strokeDasharray="50.27 125.66" /> {/* 40% - light gray */}
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#D1D5DB" strokeWidth="40" strokeDasharray="37.70 125.66" strokeDashoffset="-50.27" /> {/* 30% - slightly darker gray */}
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#D946EF" strokeWidth="40" strokeDasharray="18.85 125.66" strokeDashoffset="-87.97" /> {/* 15% - fuchsia/pink */}
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#9CA3AF" strokeWidth="40" strokeDasharray="12.57 125.66" strokeDashoffset="-106.82" /> {/* 10% - gray */}
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#6B7280" strokeWidth="40" strokeDasharray="6.28 125.66" strokeDashoffset="-119.39" /> {/* 5% - dark gray */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 pointer-events-none font-hand font-bold text-xs sm:text-sm text-white drop-shadow-md sm:drop-shadow-none sm:text-black">
                  <span className="absolute top-[40%] right-[35%]">40.0%</span>
                  <span className="absolute bottom-[28%] left-[42%]">30.0%</span>
                  <span className="absolute bottom-[45%] left-[22%]">15.0%</span>
                  <span className="absolute top-[30%] left-[30%]">10.0%</span>
                  <span className="absolute top-[22%] left-[46%]">5.0%</span>
                </div>
              </div>

              {/* Right: Community Credit List */}
              <div className="sketch-border border-2 border-black p-6 sm:p-10 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
                <h3 className="font-hand font-bold text-2xl sm:text-3xl text-center mb-8">Community credit</h3>
                <div className="space-y-6 font-hand text-lg sm:text-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
                      <span>Token hold</span>
                    </div>
                    <span className="font-bold">800</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
                      <span>Twitter re- (by AI)</span>
                    </div>
                    <span className="font-bold">600</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black bg-fuchsia-500"></div>
                      <span>Social Token</span>
                    </div>
                    <span className="font-bold">300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
                      <span>lp token hold or staking</span>
                    </div>
                    <span className="font-bold">200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
                      <span>Curation Graph</span>
                    </div>
                    <span className="font-bold">100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};