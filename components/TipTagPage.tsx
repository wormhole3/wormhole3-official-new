import React from 'react';

// Reusable component for the social media post mockups
const SocialPost = ({ type, content, children }: { type: string, content: React.ReactNode, children?: React.ReactNode }) => (
  <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">{type}</div>
      <div className="w-full space-y-2">
        <div className="h-3 w-1/2 bg-gray-400 rounded-full"></div>
        <div className="h-3 w-1/4 bg-gray-300 rounded-full hidden sm:block"></div>
      </div>
    </div>
    <div className="pl-0 sm:pl-14 font-hand text-lg">{content}</div>
    {children && <div className="flex flex-wrap gap-2 justify-end mt-4">{children}</div>}
  </div>
);

const SmallSocialPost = ({ type, content }: { type: string, content: React.ReactNode }) => (
  <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">{type}</div>
      <div className="h-3 w-1/3 bg-gray-400 rounded-full"></div>
    </div>
    <p className="font-hand text-lg">{content}</p>
  </div>
);

const InfoBox = ({ type, content }: { type: string, content: React.ReactNode }) => (
  <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm flex items-center gap-3 h-full">
    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">{type}</div>
    <p className="font-hand text-lg">{content}</p>
  </div>
);

export const TipTagPage: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
          Help billions of social media users enter the Web3 world.
        </h1>
        <p className="font-hand text-lg sm:text-xl text-gray-600 max-w-4xl">
          With just a social media account, you can use cryptocurrency in social contexts for social tipping, social payments, social trading and etc.
        </p>
      </section>

      {/* Social Tipping Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Tipping</h2>
            <p className="font-hand text-lg text-gray-600">
              Any user on X can reply "@TagAIDAO tip $ticker" under any post to tip the post with any cryptocurrency by its ticker name.
            </p>
          </div>
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white space-y-6">
            <SocialPost type="creator" content={<div className="space-y-2"><div className="h-3 bg-gray-200 rounded-full"></div><div className="h-3 bg-gray-200 rounded-full w-2/3"></div><div className="h-3 bg-gray-200 rounded-full w-1/2"></div></div>}>
              <button className="flex items-center gap-1 text-gray-500 text-xs border border-gray-400 px-3 py-1 rounded-lg font-hand font-bold bg-white">Like</button>
              <button className="flex items-center gap-1 text-white text-xs border border-purple-400 px-3 py-1 rounded-lg font-hand font-bold bg-purple-500">Reply</button>
              <button className="flex items-center gap-1 text-gray-500 text-xs border border-gray-400 px-3 py-1 rounded-lg font-hand font-bold bg-white">Retweet</button>
            </SocialPost>
            <SocialPost type="curator" content={
              <p>@TagAIDAO tip <span className="font-bold text-purple-600">$BUIDL</span> + Comments</p>
            } />
          </div>
        </div>
      </section>

      {/* Social Payment Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Payment</h2>
            <p className="font-hand text-lg text-gray-600">
              X users can post in the following format to tip any X user with any amount of any cryptocurrency.
            </p>
          </div>
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white">
             <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm text-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">creator</div>
                    <div className="h-3 w-1/3 bg-gray-400 rounded-full"></div>
                </div>
                <p className="font-hand text-lg my-6">@TagAIDAO tip *** <span className="font-bold text-purple-600">$ticker</span> to @elonmusk</p>
                <div className="flex justify-end">
                    <button className="flex items-center gap-1 text-white text-sm border border-purple-400 px-6 py-1 rounded-lg font-hand font-bold bg-purple-500">Post</button>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Social Trading Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Trading</h2>
            <p className="font-hand text-lg text-gray-600">
              A like or a reply can each become an on-chain transaction, allowing transactions to occur naturally within social media networks.
            </p>
          </div>
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white">
            <div className="sketch-border border-2 border-gray-600 p-4 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-hand font-bold shrink-0">curator</div>
                     <div className="h-3 w-1/3 bg-gray-400 rounded-full"></div>
                </div>
                <p className="pl-0 sm:pl-14 font-hand text-lg">buy <span className="font-bold text-purple-600">$token</span> with a like</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Request Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hand text-5xl mb-2">Social Request</h2>
            <p className="font-hand text-lg text-gray-600 max-w-3xl mx-auto">
              Any user on X can reply "@TagAIDAO tip $ticker" under any post to tip the post with any cryptocurrency by its ticker name.
            </p>
          </div>
          <div className="sketch-border border-2 border-gray-800 p-6 sm:p-12 shadow-lg bg-white">
            <div className="flex flex-col gap-6">
              <SocialPost type="A" content={
                <p>I need USDT. Anyone who transfers up to 500 USDT to me and completes the payment within 3 days, I will send you USD/EUR/Naira in return.</p>
              }>
                <button className="flex items-center gap-1 text-gray-500 text-xs border border-gray-400 px-3 py-1 rounded-lg font-hand font-bold bg-white">Like</button>
                <button className="flex items-center gap-1 text-white text-xs border border-purple-400 px-3 py-1 rounded-lg font-hand font-bold bg-purple-500">Reply</button>
                <button className="flex items-center gap-1 text-gray-500 text-xs border border-gray-400 px-3 py-1 rounded-lg font-hand font-bold bg-white">Retweet</button>
                <button className="flex items-center gap-1 text-gray-500 text-xs border border-gray-400 px-3 py-1 rounded-lg font-hand font-bold bg-white">Quote</button>
              </SocialPost>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SmallSocialPost type="B" content={
                  <p>@TagAIDAO tip 100 USDT and Request USD in three days</p>
                }/>
                <InfoBox type="B" content="Create a Request on TipTag."/>
                <InfoBox type="A" content="Pay on TipTag and Request completed"/>
                <SmallSocialPost type="A" content={
                  <p>I have already paid in USD. Please check on TipTag.</p>
                }/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};