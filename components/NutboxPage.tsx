import React from 'react';

const PieChart: React.FC = () => (
  <div className="sketch-border border-2 border-black p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full max-w-sm aspect-square flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
      {/* 40% segment - light gray */}
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="#E5E7EB" strokeWidth="40" strokeDasharray="50.27 125.66" />
      {/* 30% segment - medium gray */}
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="#D1D5DB" strokeWidth="40" strokeDasharray="37.70 125.66" strokeDashoffset="-50.27" />
      {/* 15% segment - darker gray */}
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="#9CA3AF" strokeWidth="40" strokeDasharray="18.85 125.66" strokeDashoffset="-87.97" />
      {/* 10% segment - highlighted yellow */}
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="#FCD34D" strokeWidth="40" strokeDasharray="12.57 125.66" strokeDashoffset="-106.82" />
      {/* 5% segment - darkest gray */}
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="#6B7280" strokeWidth="40" strokeDasharray="6.28 125.66" strokeDashoffset="-119.39" />
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
);

const CommunityCreditList: React.FC = () => (
  <div className="sketch-border border-2 border-black p-6 sm:p-10 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
    <h3 className="font-hand font-bold text-2xl sm:text-3xl text-center mb-8">Community credit</h3>
    <div className="space-y-6 font-hand text-lg sm:text-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-white border border-black" />
          <span>Token hold</span>
        </div>
        <span className="font-bold">800</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-white border border-black" />
          <span>Twitter re- (by AI)</span>
        </div>
        <span className="font-bold">600</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-white border border-black" />
          <span>Social Token</span>
        </div>
        <span className="font-bold">300</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-yellow-400 border border-black" />
          <span>lp token hold or staking</span>
        </div>
        <span className="font-bold">200</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-white border border-black" />
          <span>Curation Graph</span>
        </div>
        <span className="font-bold">100</span>
      </div>
    </div>
  </div>
);

export const NutboxPage: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn">
      {/* Hero */}
      <section className="py-20 sm:py-28 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
          ISO - Initial Staking Offering
        </h1>
        <p className="font-hand text-lg sm:text-xl text-gray-600 max-w-3xl">
          A fair launch based on the hundreds-of-billions-dollar staking economy and millions of stakers.
        </p>
      </section>

      {/* Staking rewards provide liquidity (strict per provided prototype) */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">Staking rewards provide liquidity for tokens</h2>
            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
              Staking rewards automatically provide a liquidity pool for project or community tokens, and stakers receive tokens per block.
            </p>
          </div>

          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
            <div className="relative w-full max-w-5xl mx-auto min-h-[420px]">
              <svg viewBox="0 0 1000 420" className="w-full h-full">
                <defs>
                  <marker id="arrow-dark" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3a3a3a" />
                  </marker>
                  <marker id="arrow-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f29900" />
                  </marker>
                </defs>

                {/* Circles */}
                <circle cx="150" cy="140" r="65" fill="#fff" stroke="#000" strokeWidth="3" />
                <circle cx="470" cy="140" r="70" fill="#fff" stroke="#000" strokeWidth="3" />
                <circle cx="800" cy="140" r="65" fill="#f6e7d1" stroke="#000" strokeWidth="3" />

                {/* Arrow: Post Token (staker -> pos) */}
                <line x1="215" y1="140" x2="400" y2="140" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark)" />
                {/* Arrow: Post Token (pos -> validator) */}
                <line x1="540" y1="140" x2="730" y2="140" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark)" />
                {/* Arrow: Provider Fee (pos -> validator) */}
                <line x1="540" y1="170" x2="730" y2="170" stroke="#f29900" strokeWidth="3" markerEnd="url(#arrow-orange)" />
                {/* Arrow: Staking Reward (pos -> DAO Treasury) */}
                <line x1="520" y1="190" x2="690" y2="300" stroke="#f29900" strokeWidth="3" markerEnd="url(#arrow-orange)" />
                {/* Arrow: token (DAO Treasury -> staker) */}
                <line x1="520" y1="300" x2="250" y2="210" stroke="#f29900" strokeWidth="2" strokeDasharray="10 10" markerEnd="url(#arrow-orange)" />

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
      </section>

      {/* Huge staking reward per year */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">Huge staking reward per year</h2>
            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
              Hundreds of billions in staking, and tens of billions in staking rewards. ISO, LSD, and Re-Staking are known as the three major markets for staking rewards.
            </p>
          </div>

          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
            <div className="w-full max-w-5xl mx-auto min-h-[320px]">
              <svg viewBox="0 0 1000 320" className="w-full h-full">
                <defs>
                  <marker id="arrow-dark-big" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3a3a3a" />
                  </marker>
                  {/* Orange arrowhead (same shape as dark, orientation handled by SVG) */}
                  <marker id="arrow-orange-big" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f29900" />
                  </marker>
                </defs>

                {/* Circles */}
                <circle cx="180" cy="150" r="70" fill="#fff" stroke="#000" strokeWidth="3" />
                <circle cx="500" cy="150" r="70" fill="#fff" stroke="#000" strokeWidth="3" />
                <circle cx="820" cy="150" r="70" fill="#f6e7d1" stroke="#000" strokeWidth="3" />

                {/* Horizontal arrows */}
                <line x1="250" y1="150" x2="430" y2="150" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark-big)" />
                <line x1="570" y1="150" x2="750" y2="150" stroke="#3a3a3a" strokeWidth="3" markerEnd="url(#arrow-dark-big)" />

                {/* Staking reward arrow (orange, from PoS to Staker, slightly shortened to avoid touching PoS circle) */}
                <line x1="430" y1="210" x2="230" y2="210" stroke="#f29900" strokeWidth="3" markerEnd="url(#arrow-orange-big)" />

                {/* Labels */}
                <text x="310" y="135" className="font-hand text-sm fill-gray-700">Post Token</text>
                <text x="630" y="135" className="font-hand text-sm fill-gray-700">Post Token</text>

                <text x="320" y="235" className="font-hand text-lg fill-[#f29900]">
                  Staking Reward
                </text>
                <text x="320" y="260" className="font-hand text-lg fill-[#f29900]">
                  ($4.7 B/YEAR)
                </text>

                {/* Text inside circles */}
                <text x="180" y="155" textAnchor="middle" className="font-hand text-xl fill-black">Staker</text>
                <text x="500" y="145" textAnchor="middle" className="font-hand text-xl fill-black">PoS</text>
                <text x="500" y="172" textAnchor="middle" className="font-hand text-xl fill-black">Chain</text>
                <text x="820" y="145" textAnchor="middle" className="font-hand text-lg fill-black">validator</text>
                <text x="820" y="170" textAnchor="middle" className="font-hand text-lg fill-black">operator</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Composable Community credit (last) */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-hand text-4xl sm:text-5xl mb-4">Composable Community credit</h2>
            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
              Participants&apos; staking activities within the community can serve as a component of community credit and play a role in community credit–based distribution scenarios.
            </p>
          </div>

          <div className="sketch-border border-2 border-gray-800 p-4 sm:p-8 md:p-12 shadow-lg bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto">
              <PieChart />
              <CommunityCreditList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


