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
    </div>
  );
};