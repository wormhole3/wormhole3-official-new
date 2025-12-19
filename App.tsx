
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ArchitectureStack } from './components/ArchitectureStack';
import { ScenarioSection } from './components/ScenarioSection';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { TagAIPage } from './components/TagAIPage';
import { DonutPage } from './components/DonutPage';
import { AboutUsPage } from './components/AboutUsPage';
import { TipTagPage } from './components/TipTagPage';
import { PredictionPage } from './components/PredictionPage';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <ArchitectureSection />
    <ArchitectureStack />
    <ScenarioSection />
    <Ecosystem />
  </>
);

// Layout component that includes Navbar and Footer
const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tiptag" element={<TipTagPage />} />
          <Route path="/tagai" element={<TagAIPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/donut" element={<DonutPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
