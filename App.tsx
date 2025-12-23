
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ComposableCommunityCredit } from './components/ComposableCommunityCredit';
import { ArchitectureStack } from './components/ArchitectureStack';
import { ScenarioSection } from './components/ScenarioSection';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { TagAIPage } from './components/TagAIPage';
import { DonutPage } from './components/DonutPage';
import { NutboxPage } from './components/NutboxPage';
import { AboutUsPage } from './components/AboutUsPage';
import { TipTagPage } from './components/TipTagPage';
import { PredictionPage } from './components/PredictionPage';

const HomePage = () => (
  <>
    <Hero />
    <ArchitectureSection />
    <ComposableCommunityCredit />
    <ArchitectureStack />
    <ScenarioSection />
    <Ecosystem />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tiptag" element={<TipTagPage />} />
          <Route path="/tagai" element={<TagAIPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/nutbox" element={<NutboxPage />} />
          <Route path="/donut" element={<DonutPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* 默认路由重定向到首页，或者可以添加 404 页面 */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
