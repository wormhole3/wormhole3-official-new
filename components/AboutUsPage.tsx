import React from 'react';

const HistoryGraphic = () => (
    <div className="w-64 h-64 sm:w-80 sm:h-80 bg-black flex items-center justify-center mx-auto rounded-lg shadow-2xl overflow-hidden">
        <div className="w-[90%] h-[90%] rounded-full border-2 border-white/30 relative flex items-center justify-center animate-pulse">
            <div className="w-[40%] h-[40%] rounded-full border border-white/30 absolute"></div>
            <div className="absolute top-[15%] w-12 h-6 border-b-2 border-l-2 border-r-2 border-white/80 rounded-b-full transform -rotate-12"></div>
            <div className="absolute bottom-[15%] w-12 h-6 border-t-2 border-l-2 border-r-2 border-white/80 rounded-t-full transform rotate-12"></div>
            <div className="absolute left-[15%] w-6 h-12 border-r-2 border-t-2 border-b-2 border-white/80 rounded-r-full transform rotate-12"></div>
            <div className="absolute right-[15%] w-6 h-12 border-l-2 border-t-2 border-b-2 border-white/80 rounded-l-full transform -rotate-12"></div>
        </div>
    </div>
);

// FIX: Made the `children` prop optional to resolve TypeScript errors where the compiler
// failed to infer its presence, despite it being provided in the JSX.
const GrantCard = ({ title, children }: { title: string; children?: React.ReactNode; }) => (
    <div className="text-center font-hand">
        <div className="sketch-border border-2 border-gray-800 p-2 sm:p-4 bg-white shadow-lg mb-4 flex items-center justify-center h-80 sm:h-96">
            {children}
        </div>
        <p className="font-bold text-sm sm:text-base">{title}</p>
    </div>
);

export const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white animate-fadeIn">
            {/* Hero Section */}
            <section className="py-24 sm:py-32 flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
                    LINK Community to Web3
                </h1>
                <div className="font-hand text-lg sm:text-xl text-gray-600 max-w-3xl space-y-2">
                    <p>Everyone can start a DAO and bootstrap it!</p>
                    <p>Any individual can join a free and multilateral global market through Web3.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-gray-50/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-hand text-5xl mb-12 text-brand-600">Our History</h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 font-hand text-gray-700 text-base leading-relaxed">
                            <div>
                                <h3 className="font-bold text-xl mb-1">Q1 of 2019</h3>
                                <p>we created WhereIN – a blockchain-based content community App, and formed a curator DAO</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Q4 of 2020</h3>
                                <p>we launched Peanut — a staking DAO. The PoS-based Staking Economy raised funds (ISO) for the DAO and launched staking asset liquidity, liquidity mining, staking pool, proposal governance, etc</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Q4 of 2021</h3>
                                <p>we launched Nutbox – a staking DAO creation platform, allowing everyone to create a DAO like Peanut in 3 minutes. Nutbox won third place in the Wanxiang Hackathon in 2021. The TVL reached $36Million 3 weeks after launching it</p>
                            </div>
                             <div>
                                <h3 className="font-bold text-xl mb-1">Q3 of 2022</h3>
                                <p>Wormhole3 testnet was launched. Wormhole3 connects Web2 social media platforms with Web3 Social DA through social middleware such as social oracles, helping social platforms build a native “value layer” and create crypto mini apps around content-based #, @, $, and 🔗.</p>
                            </div>
                             <div>
                                <h3 className="font-bold text-xl mb-1">Q1 of 2024</h3>
                                <p>Donut is launching on Bitcoin Layer 2 for the first time. We aim to enable every personal IP to easily create their social token — IPShare — and share the assets, products, or services they like directly beneath their content. Donut's social token system for personal IP unlocks broader possibilities for social commerce in the Web3 world.</p>
                            </div>
                             <div>
                                <h3 className="font-bold text-xl mb-1">Q3 of 2024</h3>
                                <p>TagAI explores AI- and prediction-market-driven social distribution, aiming to help interest communities, projects, and meme communities on social media platforms issue assets and achieve cold starts through their communities.</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <HistoryGraphic />
                        </div>
                    </div>
                </div>
            </section>

            {/* Grant Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-hand text-5xl mb-2 text-brand-600">Our Grant</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <GrantCard title="Wanxiang Blockchain Fall Hackathon-2021">
                           <div className="w-full bg-gray-100 p-4 text-xs text-gray-600 flex flex-col justify-between h-full border border-gray-200 rounded-lg">
                                <div><p className="font-bold text-2xl text-black">季军</p><p className="font-sans font-semibold">THIRD PLACE</p></div>
                                <p className="text-left leading-snug">在2021万向区块链黑客马拉松—“数字世界2077”比赛中，凭借优异的表现，荣获...三等奖！</p>
                                <p className="text-left font-sans text-gray-400">October 09, 2021</p>
                           </div>
                        </GrantCard>
                        <GrantCard title="Moonbeam">
                             <div className="w-full bg-gray-100 p-4 text-xs text-gray-600 flex flex-col justify-between h-full border border-gray-200 rounded-lg">
                                <div><p className="font-bold text-2xl text-black">Moonbeam</p><p className="font-sans font-semibold">赞助商特别奖</p></div>
                                <p className="text-left leading-snug">在2021万向区块链黑客马拉松—“数字世界2077”比赛中，凭借优异的表现，荣获...Moonbeam赞助商特别奖</p>
                                <p className="text-left font-sans text-gray-400">Team: Walnut</p>
                           </div>
                        </GrantCard>
                        <GrantCard title="Wanxiang Blockchain Fall Hackathon-2022">
                             <div className="w-full bg-gray-100 p-4 text-xs text-gray-600 flex flex-col justify-between h-full border border-gray-200 rounded-lg">
                                <div><p className="font-bold text-2xl text-black">亚军</p><p className="font-sans font-semibold">SECOND PLACE</p></div>
                                <p className="text-left leading-snug">在2022万向区块链黑客马拉松—“下一站未来”比赛中，凭借优异表现，荣获亚军</p>
                                <p className="text-left font-sans text-gray-400">Sep 26, 2022</p>
                           </div>
                        </GrantCard>
                         <GrantCard title="BNB HACK PRIZE 2">
                            <div className="w-full bg-gray-100 p-4 text-xs text-gray-600 flex flex-col justify-center items-center gap-4 h-full border border-gray-200 rounded-lg">
                                <p className="font-bold text-black text-lg">BNB HACK WINNERS</p>
                                <div className="w-48 h-24 bg-yellow-400 border-2 border-black sketch-border"></div>
                                <p>A screenshot of a tweet announcing the winners.</p>
                           </div>
                        </GrantCard>
                    </div>
                </div>
            </section>
            
            {/* Join Us Section */}
            <section className="bg-brand-500 py-20 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="font-hand text-2xl mb-6">A stage for tiny individuals to magnify in the Web3 world</p>
                    <h2 className="font-hand text-6xl sm:text-7xl mb-10 font-bold">Join US</h2>
                    <a href="https://t.me/tagaidotfun" target="_blank" rel="noopener noreferrer" className="sketch-border border-2 border-white bg-white text-brand-600 px-10 py-3 text-xl font-hand font-bold hover:bg-transparent hover:text-white transition-colors hover:scale-105 transform inline-block">
                        Join US
                    </a>
                </div>
            </section>
        </div>
    );
};