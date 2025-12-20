
import React, { useState } from 'react';
import { ActionButton, SocialIcon, ChainLogo } from './Icons';
import { ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';

const Sparkline = ({ data, color }: { data: number[], color: string }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d - min) / range) * 100;
        return `${x},${y}`;
    }).join(' ');

    return (
        <svg viewBox="0 0 100 100" className="w-24 h-8 overflow-visible" preserveAspectRatio="none">
            <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
    );
};

const CreatorPost = ({ 
    id, 
    text, 
    showStats = false,
    className = "",
    highlightButtons = false
}: { 
    id: string; 
    text: string; 
    showStats?: boolean;
    className?: string;
    highlightButtons?: boolean;
}) => {
    const buttonClass = highlightButtons
        ? "flex items-center gap-1 text-white transition-colors text-xs border border-purple-500 px-2 py-1 rounded-lg font-hand font-bold bg-purple-400 hover:bg-purple-500"
        : "flex items-center gap-1 text-gray-600 transition-colors text-xs border border-gray-400 px-2 py-1 rounded-lg font-hand font-bold bg-white hover:bg-gray-50";

    return (
        <div className={`sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex flex-col justify-center ${className}`}>
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold text-gray-700 shrink-0 text-xs sm:text-base">
                    creator {id}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-1/2 h-2 sm:h-3 bg-gray-800 rounded-full"></div>
                </div>
            </div>
            <div className="space-y-2 pl-0 sm:pl-14 mb-2">
                <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded"></div>
            </div>
            <p className="font-hand text-base sm:text-lg mt-2 pl-0 sm:pl-14 text-gray-800">{text}</p>
            <div className="flex flex-wrap gap-2 justify-end mt-4">
                <button className={buttonClass}>Like</button>
                <button className={buttonClass}>Reply</button>
                <button className={buttonClass}>Retweet</button>
                <button className={buttonClass}>Quote</button>
            </div>
        </div>
    );
};

export const PredictionPage: React.FC = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    const scenarioTabs = [
        { id: '01', title: 'Single-tweet prediction', desc: 'Attach a mini prediction bar under every tweet — tagging each piece of information on X with a real-time "market consensus price."' },
        { id: '02', title: 'Opinion Battle', desc: 'Mindshare duel between two posts/viewpoints.' },
        { id: '03', title: 'Community governance', desc: "The fate of an IP, the progression of a game's storyline, the next move of a Pokémon, whether a community proposal passes, and so on — all of these can be decided and predicted by a group of people." },
        { id: '04', title: 'Trending Ranking', desc: 'Anyone can create prediction markets around the trends of any information or accounts, with outcomes determined by community credit–based voting.' },
    ];

    const trendingData = [
        { rank: 1, name: 'BNB Chain', handle: '@BNBCHAIN', icon: 'BNB', share: '17.91%', d24: '-0.01%', d7: '-0.02%', chart: [10, 10, 9, 9, 8, 8, 7], color: '#ef4444', isUp: false },
        { rank: 2, name: 'TagAI', handle: '@TagAIDAO', icon: 'TAG', share: '13.03%', d24: '-0.02%', d7: '-0.03%', chart: [10, 9, 9, 8, 7, 7, 6], color: '#ef4444', isUp: false },
        { rank: 3, name: 'Binance', handle: '@binance', icon: 'BNB', share: '9.92%', d24: '-0.01%', d7: '-0.01%', chart: [8, 8, 8, 7, 7, 6, 6], color: '#ef4444', isUp: false },
        { rank: 4, name: 'Wormhole3', handle: '@wormhole_3', icon: 'WH3', share: '3.52%', d24: '0.21%', d7: '0.37%', chart: [4, 4, 5, 5, 7, 7, 9], color: '#22c55e', isUp: true },
    ];

    return (
        <div className="bg-white animate-fadeIn">
            {/* Hero Section */}
            <section className="py-20 sm:py-32 flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-8 text-gray-900 leading-tight">
                    Social Prediction Markets measure attention <br className="hidden md:block"/> and reveal community truth.
                </h1>
                <p className="font-hand text-lg sm:text-xl text-gray-600 max-w-3xl">
                    Creates real-time markets for communities, brands, narratives, and ideas.
                </p>
            </section>

            {/* --- GROUP 1: Core Mechanisms --- */}
            <div className="bg-gray-50/50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    
                    {/* 1. Tokenize */}
                    <section>
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <h2 className="font-hand text-3xl sm:text-4xl">Community credit–based voting</h2>
                            </div>
                            <p className="font-hand text-lg text-gray-600 max-w-4xl mx-auto">
                                Community credit–based voting on content related to community events and topics, with the results used as the "truth" input for settling prediction market outcomes. This enables people to create prediction markets for any event or topic, in communities of any size.
                            </p>
                        </div>

                        <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 bg-white flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                            <div className="w-full max-w-md">
                                <CreatorPost id="" text="Bitcoin will flip gold." />
                            </div>
                            
                            <div className="hidden lg:flex items-center text-gray-800">
                                <ArrowLeft size={32} />
                                <div className="w-24 h-12 bg-gray-300 rounded-[50%] flex items-center justify-center font-hand font-bold text-sm border-2 border-gray-600 mx-4">curator</div>
                                <ArrowLeft size={32} />
                            </div>

                            <div className="lg:hidden flex flex-col items-center gap-4">
                                <ArrowDown size={24} />
                                <div className="w-24 h-12 bg-gray-300 rounded-[50%] flex items-center justify-center font-hand font-bold text-sm border-2 border-gray-600">curator</div>
                                <ArrowDown size={24} />
                            </div>

                            <div className="w-full max-w-xs sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm relative pt-6">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-200 border-2 border-gray-600 px-3 py-1 rounded-lg font-hand font-bold text-sm">Community credit</div>
                                <div className="space-y-3 font-mono text-sm mt-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-full"></div><span>twitter re- (by AI)</span></div>
                                        <span className="font-bold">1000</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-full"></div><span>Social Token</span></div>
                                        <span className="font-bold">500</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-full"></div><span>Token hold</span></div>
                                        <span className="font-bold">300</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300 rounded-full"></div><span>Curation Graph</span></div>
                                        <span className="font-bold">200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Market Mechanism */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="font-hand text-3xl sm:text-4xl mb-4">Prediction market based on community tokens</h2>
                            <p className="font-hand text-lg text-gray-600 max-w-5xl mx-auto">
                                Social prediction markets are concerned with how a small market can converge into a larger one. Therefore, participation in a social prediction market begins with predicting by staking community tokens. First, predictions are made within the community by staking community tokens, and then predictions across communities are made by staking USDT.
                            </p>
                        </div>
                        
                        <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 bg-white flex flex-col md:flex-row items-stretch justify-center gap-8">
                            <div className="flex-1 flex flex-col gap-6">
                                <CreatorPost id="01" text="Bitcoin will flip gold." />
                                <div className="sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm flex flex-col items-center justify-center gap-2 relative mt-4">
                                    <div className="absolute -top-4 bg-brand-200 border-2 border-gray-600 px-6 py-1 rounded-lg font-hand font-bold text-sm">A Pool</div>
                                    <p className="font-hand text-center text-gray-600 mt-2">Stake community or project tokens <br/> to predict outcomes</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center font-hand text-4xl text-gray-800 font-bold">VS</div>

                            <div className="flex-1 flex flex-col gap-6">
                                <CreatorPost id="02" text="Gold is the biggest threat to Bitcoin." />
                                <div className="sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm flex flex-col items-center justify-center gap-2 relative mt-4">
                                    <div className="absolute -top-4 bg-purple-400 text-white border-2 border-gray-600 px-6 py-1 rounded-lg font-hand font-bold text-sm">B Pool</div>
                                    <p className="font-hand text-center text-gray-600 mt-2">Stake community or project tokens <br/> to predict outcomes</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* --- GROUP 2: Social Prediction Scenario --- */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="font-hand text-4xl sm:text-5xl mb-4">Social prediction scenario</h2>
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                         <p className="font-hand text-lg text-gray-600 max-w-2xl">
                             {scenarioTabs[activeScenario].desc}
                         </p>
                         <div className="flex flex-wrap gap-x-8 gap-y-4 font-hand text-lg">
                             {scenarioTabs.map((tab, idx) => (
                                 <button 
                                     key={tab.id}
                                     onClick={() => setActiveScenario(idx)}
                                     className={`transition-all duration-200 pb-2 border-b-2 ${activeScenario === idx ? 'text-gray-900 border-gray-900 font-bold' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
                                 >
                                     <div className="flex flex-col items-center">
                                        <span className={`${activeScenario === idx ? 'text-purple-500' : ''}`}>{tab.title}</span>
                                        <span className="text-sm opacity-60">{tab.id}</span>
                                     </div>
                                 </button>
                             ))}
                         </div>
                    </div>
                </div>

                <div className="sketch-border border-2 border-gray-800 p-4 sm:p-12 shadow-lg bg-white min-h-[500px] flex items-center justify-center">
                    
                    {/* SCENARIO 1: Single Tweet */}
                    {activeScenario === 0 && (
                        <div className="w-full max-w-2xl flex flex-col gap-6 animate-fadeIn">
                            <CreatorPost id="" text="Bitcoin will flip gold." />
                            <div className="sketch-border border-2 border-gray-600 p-6 bg-white shadow-sm">
                                <div className="font-hand text-gray-500 text-sm mb-4">This tweet</div>
                                <div className="space-y-4 font-hand text-lg">
                                    <div className="flex justify-between items-center">
                                        <span>Predicted final likes: <span className="font-bold">123k</span> ↑</span>
                                    </div>
                                    <div>
                                        Top forecaster: <span className="font-bold">@xxx</span> (91.2 % accuracy)
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span>Truthfulness:</span>
                                        <span className="bg-gray-100 px-2 py-1 rounded">88 % True</span>
                                        <span className="bg-gray-100 px-2 py-1 rounded">12 % False</span>
                                        <span className="text-sm text-gray-400">← click to bet</span>
                                    </div>
                                    <div>
                                        Predicted 24 h trending rank: <span className="font-bold">#8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SCENARIO 2: Opinion Battle */}
                    {activeScenario === 1 && (
                        <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-center animate-fadeIn">
                             <div className="flex-1 flex flex-col gap-6 w-full">
                                <CreatorPost id="01" text="Bitcoin will flip gold." />
                                <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm relative pt-6">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-200 border-2 border-gray-600 px-3 py-1 rounded-lg font-hand font-bold text-xs">Curators 01 - on-chain credit</div>
                                    <div className="grid grid-cols-2 gap-4 font-mono text-xs sm:text-sm mt-2">
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>twitter re- 1000</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>social graph 300</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>Token hold 500</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>Others 200</span></div>
                                    </div>
                                </div>
                             </div>

                             <div className="font-hand text-4xl font-bold">VS</div>

                             <div className="flex-1 flex flex-col gap-6 w-full">
                                <CreatorPost id="02" text="Gold is the biggest threat to Bitcoin." highlightButtons={true} />
                                <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm relative pt-6">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 text-white border-2 border-gray-600 px-3 py-1 rounded-lg font-hand font-bold text-xs">Curators 02 ~ on-chain credit</div>
                                    <div className="grid grid-cols-2 gap-4 font-mono text-xs sm:text-sm mt-2">
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>twitter re- 1200</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>social graph 100</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>Token hold 1000</span></div>
                                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><span>Others 200</span></div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    )}

                    {/* SCENARIO 3: Community Governance */}
                    {activeScenario === 2 && (
                        <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center animate-fadeIn">
                            {/* Fate of Novel */}
                            <div className="flex-1 sketch-border border-2 border-gray-600 p-6 bg-white w-full">
                                <div className="sketch-border border-2 border-gray-600 px-4 py-2 bg-white text-center font-hand text-lg mb-8 mx-auto max-w-xs">
                                    the fate of a novel's protagonist
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 sketch-border border-2 border-gray-600 p-4 bg-white">
                                        <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 bg-gray-300 rounded-[50%] flex items-center justify-center font-hand text-xs font-bold">creator01</div><div className="h-1 bg-gray-400 w-10 rounded"></div></div>
                                        <p className="font-hand text-sm mb-2">Wukong becoming a Buddha.</p>
                                        <div className="flex gap-1 justify-end"><div className="px-2 py-0.5 bg-brand-200 border border-black rounded text-[10px] font-hand font-bold">Like</div><div className="px-2 py-0.5 bg-brand-200 border border-black rounded text-[10px] font-hand font-bold">Reply</div><div className="px-2 py-0.5 bg-brand-200 border border-black rounded text-[10px] font-hand font-bold">Retweet</div></div>
                                    </div>
                                    <div className="flex-1 sketch-border border-2 border-gray-600 p-4 bg-white">
                                        <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 bg-gray-300 rounded-[50%] flex items-center justify-center font-hand text-xs font-bold">creator02</div><div className="h-1 bg-gray-400 w-10 rounded"></div></div>
                                        <p className="font-hand text-sm mb-2">Wukong descending into demonic form.</p>
                                        <div className="flex gap-1 justify-end"><div className="px-2 py-0.5 bg-purple-300 border border-black rounded text-[10px] font-hand font-bold">Like</div><div className="px-2 py-0.5 bg-purple-300 border border-black rounded text-[10px] font-hand font-bold">Reply</div><div className="px-2 py-0.5 bg-purple-300 border border-black rounded text-[10px] font-hand font-bold">Retweet</div></div>
                                    </div>
                                </div>
                            </div>

                            {/* Proposal */}
                            <div className="w-full lg:w-80 sketch-border border-2 border-gray-600 p-6 bg-white flex flex-col justify-between">
                                <div className="sketch-border border-2 border-gray-600 p-4 bg-white mb-6">
                                     <div className="flex items-center gap-2 mb-2">
                                        <div className="w-10 h-10 bg-gray-300 rounded-[50%] flex items-center justify-center font-hand text-xs font-bold">creator</div>
                                        <div className="flex flex-col gap-1 w-full"><div className="h-1 bg-gray-800 w-1/2 rounded"></div><div className="h-1 bg-gray-400 w-3/4 rounded"></div></div>
                                    </div>
                                    <p className="font-hand text-center my-2">a community proposal.</p>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <button className="flex-1 sketch-border border-2 border-black bg-brand-200 py-2 font-hand font-bold text-sm">Approved</button>
                                    <button className="flex-1 sketch-border border-2 border-black bg-purple-400 py-2 font-hand font-bold text-sm text-white">Rejected</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SCENARIO 4: Trending Ranking */}
                    {activeScenario === 3 && (
                        <div className="w-full overflow-x-auto animate-fadeIn">
                             <table className="w-full min-w-[800px] text-left border-collapse">
                                <thead>
                                    <tr className="font-hand text-lg border-b-2 border-gray-100">
                                        <th className="p-4 w-16">#</th>
                                        <th className="p-4 w-64">Name</th>
                                        <th className="p-4">Mindshare</th>
                                        <th className="p-4">24h</th>
                                        <th className="p-4">7d</th>
                                        <th className="p-4 w-48">Last 7 days</th>
                                    </tr>
                                </thead>
                                <tbody className="font-sans font-medium text-gray-700">
                                    {trendingData.map((item) => (
                                        <tr key={item.rank} className="border-b border-gray-50 hover:bg-gray-50">
                                            <td className="p-4 font-bold">{item.rank}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs ${item.name === 'TagAI' ? 'bg-[#ff6b00]' : item.name === 'Wormhole3' ? 'bg-[#8B5CF6] rounded-full' : 'bg-black'}`}>
                                                        {item.name === 'Wormhole3' ? <div className="w-2 h-2 rounded-full border border-white"></div> : item.name.substring(0,3).toUpperCase()}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-gray-900">{item.name}</span>
                                                        <span className="text-gray-500 text-sm">{item.handle}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 font-mono">{item.share}</td>
                                            <td className={`p-4 font-mono ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                                {item.isUp ? '▲' : '▼'} {item.d24}
                                            </td>
                                            <td className={`p-4 font-mono ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                                {item.isUp ? '▲' : '▼'} {item.d7}
                                            </td>
                                            <td className="p-4">
                                                <Sparkline data={item.chart} color={item.color} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
