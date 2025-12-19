import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from 'lucide-react';
import { SocialIcon, SteemLogo, Logo, PixelPLogo, PurpleArchLogo, ActionButton } from './Icons';

// A shared component for the main diagram stack used in tabs 2 and 3
const MainDiagramStack = () => (
  <div className="flex flex-col items-center gap-6 w-full max-w-md">
    <div className="w-full bg-gray-200 border-2 border-black rounded-2xl h-24 px-3 sm:px-8 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <span className="font-hand font-bold text-lg sm:text-xl">Social DA Layer</span>
      <div className="flex gap-2 sm:gap-4"><SteemLogo className="w-8 h-8 sm:w-12 sm:h-12" /><PurpleArchLogo className="w-8 h-8 sm:w-12 sm:h-12" /></div>
    </div>
    <div className="flex justify-around w-full px-8"><ArrowUp size={24} /><ArrowDown size={24} /></div>
    <div className="w-full bg-purple-300 border-2 border-black rounded-2xl h-24 px-3 sm:px-8 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 sm:gap-3"><Logo className="w-8 h-8 sm:w-12 sm:h-12" /><span className="font-hand font-bold text-base sm:text-xl">Social Oracle & Account</span></div>
      <PixelPLogo className="w-8 h-8 sm:w-12 sm:h-12" />
    </div>
    <div className="flex justify-around w-full px-8"><ArrowUp size={24} /><ArrowDown size={24} /></div>
    <div className="w-full bg-white border-2 border-black rounded-[3rem] p-3 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 sm:gap-3"><div className="px-3 py-1.5 rounded-full border-2 border-black bg-gray-200 font-hand font-bold italic text-sm sm:text-base">creator</div></div>
        <div className="bg-black text-white p-1.5 rounded-lg"><span className="font-bold text-lg sm:text-xl">𝕏</span></div>
      </div>
      {/* X Content - Two horizontal lines */}
      <div className="mb-3 space-y-1.5">
        <div className="w-full h-1.5 bg-gray-200 rounded"></div>
        <div className="w-full h-1.5 bg-gray-200 rounded"></div>
      </div>
      <div className="bg-purple-300 border-2 border-black px-3 sm:px-8 py-2 rounded-2xl flex gap-3 sm:gap-6 font-mono text-lg sm:text-xl font-bold justify-center shadow-sm my-3">
        <span>#</span><span>@</span><span>$</span><span>🔗</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
        <div className="px-3 py-1.5 rounded-full border-2 border-black bg-gray-200 font-hand font-bold italic text-sm sm:text-base">curator</div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          <ActionButton label="Like" icon={null} /><ActionButton label="Reply" icon={null} /><ActionButton label="Retweet" icon={null} /><ActionButton label="Quote" icon={null} />
        </div>
      </div>
    </div>
  </div>
);

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: '01', title: 'X as an On-chain Operations Dashboard', text: 'Web3 social accounts compatible with Web2 social platforms, enabling users to use social media platforms as on-chain control panels.' },
    { id: '02', title: 'Post as Protocol', text: 'A native "value layer" for social media platforms, allowing web2 users to easily combine content with smart contracts using #, @, $, 🔗, and more.' },
    { id: '03', title: 'Composable Community Credit', text: 'Based on an account\'s on-chain data and AI-scored social account reputation, we enable communities to define their own composable on-chain credit.' }
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
      case 2:
        // Helper function to create pie slice path
        const createPieSlice = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
          const start = {
            x: centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180),
            y: centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180)
          };
          const end = {
            x: centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180),
            y: centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180)
          };
          const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
          return `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
        };

        // Pie chart data: percentage, color, start angle
        // 第一块: 40%, 第二块: 30%, 第三块: 15%, 第四块: 10%, 第五块: 5%
        const pieData = [
          { percent: 40.0, color: '#3B82F6', start: 0 },      // 第一块 - Blue (Token hold)
          { percent: 30.0, color: '#F97316', start: 144 },    // 第二块 - Orange (Twitter re- by AI)
          { percent: 15.0, color: '#EF4444', start: 252 },    // 第三块 - Red (Social Token)
          { percent: 10.0, color: '#10B981', start: 306 },    // 第四块 - Light Green (Ip token hold)
          { percent: 5.0, color: '#059669', start: 342 }      // 第五块 - Dark Green (Curation Graph)
        ];

        // Community Credit 列表数据，与饼图一一对应
        const creditItems = [
          { label: 'Token hold', value: 800, color: '#3B82F6' },           // 对应 40%
          { label: 'Twitter re- (by AI)', value: 600, color: '#F97316' }, // 对应 30%
          { label: 'Social Token', value: 300, color: '#EF4444' },        // 对应 15%
          { label: 'Ip token hold', value: 200, color: '#10B981' },      // 对应 10%
          { label: 'Curation Graph', value: 100, color: '#059669' }      // 对应 5%
        ];

        const centerX = 160;
        const centerY = 160;
        const radius = 140;
        const labelRadius = radius * 0.7; // 标签距离圆心的距离
        
        // 计算每个扇形的中心角度用于标签定位
        const getLabelPosition = (startAngle: number, percent: number) => {
          const centerAngle = startAngle + (percent / 100) * 360 / 2;
          const angleRad = (centerAngle - 90) * Math.PI / 180;
          return {
            x: centerX + labelRadius * Math.cos(angleRad),
            y: centerY + labelRadius * Math.sin(angleRad)
          };
        };

        return (
          <div className="w-full animate-fadeIn">
            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-center gap-12 lg:gap-16 h-[600px]">
              {/* Pie Chart */}
              <div className="flex-shrink-0">
                <svg width="320" height="320" viewBox="0 0 320 320" className="border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                  <defs>
                    <filter id="shadow-pie">
                      <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="rgba(0,0,0,0.2)"/>
                    </filter>
                  </defs>
                  {/* Pie slices */}
                  {pieData.map((slice, idx) => {
                    const startAngle = slice.start;
                    const endAngle = slice.start + (slice.percent / 100) * 360;
                    return (
                      <path
                        key={idx}
                        d={createPieSlice(centerX, centerY, radius, startAngle, endAngle)}
                        fill={slice.color}
                        filter="url(#shadow-pie)"
                        stroke="black"
                        strokeWidth="1"
                      />
                    );
                  })}
                  
                  {/* Percentage labels - positioned at the center of each slice */}
                  <text x={getLabelPosition(0, 40).x} y={getLabelPosition(0, 40).y} fill="black" fontSize="14" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">40.0%</text>
                  <text x={getLabelPosition(144, 30).x} y={getLabelPosition(144, 30).y} fill="black" fontSize="14" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">30.0%</text>
                  <text x={getLabelPosition(252, 15).x} y={getLabelPosition(252, 15).y} fill="black" fontSize="14" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">15.0%</text>
                  <text x={getLabelPosition(306, 10).x} y={getLabelPosition(306, 10).y} fill="black" fontSize="14" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">10.0%</text>
                  <text x={getLabelPosition(342, 5).x} y={getLabelPosition(342, 5).y} fill="black" fontSize="14" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">5.0%</text>
                </svg>
              </div>
              
              {/* Community Credit List */}
              <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[280px]">
                <h3 className="font-hand font-bold text-xl mb-4 text-center">Community credit</h3>
                <div className="space-y-3">
                  {creditItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full border-2 border-black" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-hand text-base">{item.label}</span>
                      </div>
                      <span className="font-hand font-bold text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile View */}
            <div className="w-full lg:hidden flex flex-col items-center gap-8 animate-fadeIn py-8">
              {/* Pie Chart */}
              <div className="flex-shrink-0">
                <svg width="280" height="280" viewBox="0 0 320 320" className="border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                  <defs>
                    <filter id="shadow-pie-mobile">
                      <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="rgba(0,0,0,0.2)"/>
                    </filter>
                  </defs>
                  {/* Pie slices */}
                  {pieData.map((slice, idx) => {
                    const startAngle = slice.start;
                    const endAngle = slice.start + (slice.percent / 100) * 360;
                    return (
                      <path
                        key={idx}
                        d={createPieSlice(centerX, centerY, radius, startAngle, endAngle)}
                        fill={slice.color}
                        filter="url(#shadow-pie-mobile)"
                        stroke="black"
                        strokeWidth="1"
                      />
                    );
                  })}
                  
                  {/* Percentage labels - positioned at the center of each slice */}
                  <text x={getLabelPosition(0, 40).x} y={getLabelPosition(0, 40).y} fill="black" fontSize="12" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">40.0%</text>
                  <text x={getLabelPosition(144, 30).x} y={getLabelPosition(144, 30).y} fill="black" fontSize="12" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">30.0%</text>
                  <text x={getLabelPosition(252, 15).x} y={getLabelPosition(252, 15).y} fill="black" fontSize="12" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">15.0%</text>
                  <text x={getLabelPosition(306, 10).x} y={getLabelPosition(306, 10).y} fill="black" fontSize="12" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">10.0%</text>
                  <text x={getLabelPosition(342, 5).x} y={getLabelPosition(342, 5).y} fill="black" fontSize="12" fontFamily="Patrick Hand, cursive" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">5.0%</text>
                </svg>
              </div>
              
              {/* Community Credit List */}
              <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm">
                <h3 className="font-hand font-bold text-xl mb-4 text-center">Community credit</h3>
                <div className="space-y-3">
                  {creditItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full border-2 border-black" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-hand text-base">{item.label}</span>
                      </div>
                      <span className="font-hand font-bold text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
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