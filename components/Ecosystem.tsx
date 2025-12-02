import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialIcon } from './Icons';

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-hand text-4xl sm:text-5xl mb-16 text-gray-800">
          A WeChat-style payment network <br/> & mini-program ecosystem
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* AI Input */}
          <div className="bg-white border-2 border-gray-800 rounded-2xl p-6 w-40 h-32 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-hand text-xl font-bold">AI</span>
          </div>

          <div className="flex items-center text-gray-500 font-hand font-bold text-lg">
             <span className="hidden lg:inline">create</span>
             <ArrowRight className="ml-2" />
          </div>

          {/* Mini App Container */}
          <div className="bg-gray-200 border-2 border-gray-600 rounded-[3rem] p-8 w-full max-w-sm relative shadow-xl">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-300 border-2 border-gray-600 px-4 py-1 rounded-lg text-xs font-bold">mini App</div>
             
             <div className="bg-gray-100 border border-gray-400 rounded-xl p-3 mb-4 text-sm font-hand">
               Games, Social, Finance, Art...
             </div>
             
             <div className="space-y-3">
                <div className="bg-brand-400 border border-brand-600 rounded-lg p-3 text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  Social Token and Sharing
                </div>
                <div className="flex gap-2">
                  <div className="bg-orange-500 border border-orange-600 rounded-lg p-3 text-white font-bold text-sm flex-1 shadow-sm">
                    Social Distribution
                  </div>
                  <div className="bg-purple-400 border border-purple-600 rounded-lg p-3 text-white font-bold text-sm flex-1 shadow-sm">
                    Prediction
                  </div>
                </div>
                <div className="bg-brand-400 border border-brand-600 rounded-lg p-3 text-white font-bold text-sm shadow-sm">
                  Social Oracle and DA
                </div>
                <div className="bg-brand-400 border border-brand-600 rounded-lg p-3 text-white font-bold text-sm shadow-sm">
                  Web3 Identity + Web2 Accounts
                </div>
             </div>
          </div>

          <div className="flex items-center text-gray-500 transform lg:rotate-0 rotate-90 my-4 lg:my-0">
             <div className="border-t-2 border-dashed border-gray-400 w-16"></div>
             <ArrowRight />
          </div>

          {/* User Base */}
          <div className="bg-white border-2 border-gray-800 rounded-3xl p-6 w-full max-w-xs space-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex flex-col gap-2 font-hand text-xs font-bold text-gray-600">
               <div className="border rounded-lg p-2 flex items-center justify-center">Social sharing ~ Personal IP</div>
               <div className="border rounded-lg p-2 flex items-center justify-center">Social Distribution ~ Community-Driven</div>
             </div>
             
             <div className="bg-gray-300 rounded-xl p-4 text-center font-hand font-bold text-gray-700">
               Billions of social media users
             </div>

             <div className="flex justify-center gap-3">
               <SocialIcon platform="X" />
               <SocialIcon platform="Instagram" />
               <SocialIcon platform="TikTok" />
               <SocialIcon platform="Reddit" />
             </div>
          </div>

        </div>

        <p className="font-hand text-lg text-gray-600 mt-16 max-w-4xl mx-auto">
          AI-built webpages + account system + payment network + web2 social media traffic entry = Web3 mini apps
        </p>
      </div>
    </section>
  );
};