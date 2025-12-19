

import React from 'react';
import { SocialIcon, ChainLogo, Logo, SteemLogo, YellowBoxLogo, PurpleArchLogo } from './Icons';

export const ArchitectureStack: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-hand text-4xl sm:text-5xl text-gray-900 mb-4">Our Architecture</h2>
        <p className="text-center font-hand text-gray-500 max-w-3xl mx-auto mb-12 text-lg">
          The vision of Labs is: to empower communities and super-individuals, and help them build agreements to motivate their members' financial and social contributions.
        </p>

        {/* Main Container */}
        <div className="bg-[#373A40] rounded-[2.5rem] p-4 sm:p-10 shadow-2xl border-4 border-[#373A40] text-white font-hand relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6 items-center">
            
            {/* --- ROW 1: Application Layer --- */}
            <div className="md:col-span-2 text-xl sm:text-2xl text-white font-bold md:text-right">
              Application Layer
            </div>
            <div className="md:col-span-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
               <div className="bg-[#7D868E] rounded-2xl h-24 flex items-center justify-center text-xl sm:text-2xl shadow-lg border-b-4 border-[#5d646b] text-center p-2">
                 Project
               </div>
               <div className="bg-[#7D868E] rounded-2xl h-24 flex items-center justify-center text-xl sm:text-2xl shadow-lg border-b-4 border-[#5d646b] text-center p-2">
                 Mini App
               </div>
               <div className="bg-[#7D868E] rounded-2xl h-24 flex items-center justify-center text-lg sm:text-xl text-center px-2 leading-tight shadow-lg border-b-4 border-[#5d646b]">
                 MemeCoin and Community
               </div>
               <div className="bg-[#7D868E] rounded-2xl h-24 flex items-center justify-center text-xl sm:text-2xl shadow-lg border-b-4 border-[#5d646b] text-center p-2">
                 Others
               </div>
            </div>

            {/* --- ROW 2: Command Layer --- */}
            <div className="md:col-span-2 text-xl sm:text-2xl text-white font-bold md:text-right">
              Command Layer
            </div>
            <div className="md:col-span-10">
               <div className="bg-[#7D868E] rounded-2xl h-20 flex items-center justify-between px-4 sm:px-8 text-2xl sm:text-4xl tracking-widest shadow-lg border-b-4 border-[#5d646b] font-mono">
                 <span className="sm:pl-8">#, @, 🔗, $..</span>
                 <div className="flex gap-2">
                    <SocialIcon platform="X" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <SocialIcon platform="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <SocialIcon platform="TikTok" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <SocialIcon platform="Reddit" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
               </div>
            </div>

            {/* --- ROW 3: Smart Contract --- */}
            <div className="md:col-span-2 text-xl sm:text-2xl text-white font-bold md:text-right">
              Smart Contract
            </div>
            <div className="md:col-span-10 grid grid-cols-2 sm:grid-cols-6 gap-4">
               {/* Nutbox */}
               <div className="bg-[#D076FA] rounded-3xl h-40 p-2 flex flex-col items-center justify-center text-center shadow-lg border-b-4 border-[#B056DA]">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl mb-2 shadow-sm">
                    🐿️
                  </div>
                  <div className="text-sm sm:text-base font-bold">Nutbox - ISO</div>
               </div>

               {/* TipTag */}
               <div className="bg-[#D076FA] rounded-3xl h-40 p-2 flex flex-col items-center justify-center text-center shadow-lg border-b-4 border-[#B056DA]">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center text-white font-sans font-black text-[11px] leading-none mb-2 shadow-sm p-1">
                    <div className="text-center">
                      <div>TIP</div>
                      <div>TAG</div>
                    </div>
                  </div>
                  <div className="text-sm sm:text-base font-bold leading-tight">TipTag - Social Payment & Trading</div>
               </div>
               
               {/* TagAI */}
               <div className="bg-[#D076FA] rounded-3xl h-40 p-2 flex flex-col items-center justify-center text-center shadow-lg border-b-4 border-[#B056DA]">
                  <div className="bg-[#FF6B00] text-white font-bold px-2 py-0.5 rounded text-sm mb-3 shadow-sm">TAG</div>
                  <div className="text-sm sm:text-base font-bold leading-tight">TagAI - Social Distribution</div>
               </div>

               {/* TagAI Social Prediction Market */}
               <div className="bg-[#D076FA] rounded-3xl h-40 p-2 flex flex-col items-center justify-center text-center shadow-lg border-b-4 border-[#B056DA]">
                  <div className="bg-[#FF6B00] text-white font-bold px-2 py-0.5 rounded text-sm mb-3 shadow-sm">TAG</div>
                  <div className="text-sm sm:text-base font-bold leading-tight">TagAI - Social prediction market</div>
               </div>

               {/* Donut */}
               <div className="bg-[#D076FA] rounded-3xl h-40 p-2 flex flex-col items-center justify-center text-center shadow-lg border-b-4 border-[#B056DA]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-300 to-blue-500 mb-2 shadow-sm border-4 border-white/20"></div>
                  <div className="text-sm sm:text-base font-bold leading-tight">Donut - Social Sharing</div>
               </div>

               {/* Others */}
               <div className="bg-[#7D868E] rounded-3xl h-40 flex items-center justify-center text-xl shadow-lg border-b-4 border-[#5d646b]">
                  Others
               </div>
            </div>

            {/* --- ROW 4: Community Reputation Layer --- */}
            <div className="md:col-span-2 text-xl sm:text-2xl text-white font-bold md:text-right">
              Community Reputation Layer
            </div>
            <div className="md:col-span-10">
               <div className="bg-[#7D868E] rounded-2xl h-20 flex items-center px-4 sm:px-8 text-sm sm:text-lg shadow-lg border-b-4 border-[#5d646b] font-hand">
                 <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">Twitter Reputation</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">Token hold</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">NFT hold</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">lp token hold</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">Social Token</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500 whitespace-nowrap">Curation Graph</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#6C757D] rounded-lg border border-gray-500">...</span>
                 </div>
               </div>
            </div>

            {/* --- ROW 5: Layer 1 --- */}
            <div className="md:col-span-2 text-xl sm:text-2xl text-white font-bold md:text-right">
              Layer 1
            </div>
            <div className="md:col-span-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
               
               {/* Smart Contract Chain */}
               <div className="bg-[#7D868E] rounded-3xl h-36 sm:h-32 p-3 flex flex-col items-center justify-center relative shadow-lg border-b-4 border-[#5d646b]">
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <ChainLogo name="BNB" color="bg-[#F3BA2F]" />
                    <ChainLogo name="SOL" color="bg-black border border-gray-600" />
                    <ChainLogo name="BAS" color="bg-[#0052FF]" />
                    <ChainLogo name="ETH" color="bg-[#627EEA]" />
                  </div>
                  <div className="absolute bottom-3 bg-[#6C757D] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border border-gray-500">
                    Smart Contract Chain
                  </div>
               </div>

               {/* Social DA */}
               <div className="bg-[#7D868E] rounded-3xl h-36 sm:h-32 p-3 flex flex-col items-center justify-center relative shadow-lg border-b-4 border-[#5d646b]">
                  <div className="flex justify-center gap-3 mb-6">
                    <SteemLogo className="w-9 h-9 sm:w-10 sm:h-10" />
                    <YellowBoxLogo className="w-9 h-9 sm:w-10 sm:h-10" />
                    <PurpleArchLogo className="w-9 h-9 sm:w-10 sm:h-10" />
                  </div>
                  <div className="absolute bottom-3 bg-[#6C757D] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border border-gray-500">
                    Social DA
                  </div>
               </div>

               {/* Social Oracle */}
               <div className="bg-[#D076FA] rounded-3xl h-36 sm:h-32 p-3 flex flex-col items-center justify-center relative shadow-lg border-b-4 border-[#B056DA]">
                  <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6 items-center">
                    <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
                    <span className="font-bold text-lg sm:text-xl text-center">Wormhole3</span>
                  </div>
                  <div className="absolute bottom-3 bg-[#6C757D] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border border-gray-500">
                    Social Oracle & account
                  </div>
               </div>

               {/* Social Media */}
               <div className="bg-[#7D868E] rounded-3xl h-36 sm:h-32 p-3 flex flex-col items-center justify-center relative shadow-lg border-b-4 border-[#5d646b]">
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <SocialIcon platform="X" className="w-8 h-8" />
                    <SocialIcon platform="Instagram" className="w-8 h-8" />
                    <SocialIcon platform="TikTok" className="w-8 h-8" />
                    <SocialIcon platform="Reddit" className="w-8 h-8" />
                  </div>
                  <div className="absolute bottom-3 bg-[#6C757D] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border border-gray-500">
                    Social Media
                  </div>
               </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};