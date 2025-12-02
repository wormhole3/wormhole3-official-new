import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'tiptag':
        return <TipTagPage />;
      case 'tagai':
        return <TagAIPage />;
      case 'donut':
        return <DonutPage />;
      case 'about':
        return <AboutUsPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <ArchitectureSection />
            <ArchitectureStack />
            <ScenarioSection />
            <Ecosystem />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar navigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;