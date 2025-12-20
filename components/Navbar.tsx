
import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';
import { X, Menu } from 'lucide-react';

interface NavbarProps {
  navigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ navigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (page: string) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  const getLinkClassName = (page: string) => {
    return `hover:text-brand-600 transition-colors cursor-pointer ${currentPage === page ? 'text-purple-500 font-bold' : ''}`;
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold text-brand-600 font-sans tracking-tight">Wormhole3</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600 font-hand text-lg">
            <a onClick={() => handleNavigate('tiptag')} className={getLinkClassName('tiptag')}>TipTag</a>
            <a onClick={() => handleNavigate('prediction')} className={getLinkClassName('prediction')}>TagAI - Prediction</a>
            <a onClick={() => handleNavigate('tagai')} className={getLinkClassName('tagai')}>TagAI</a>
            <a onClick={() => handleNavigate('donut')} className={getLinkClassName('donut')}>Donut</a>
            <a onClick={() => handleNavigate('about')} className={getLinkClassName('about')}>About US</a>
            <a href="https://tagai.gitbook.io/wh3/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">WIKI</a>
          </div>

          <button className="md:hidden text-gray-600 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 font-hand text-2xl text-gray-800">
          <a onClick={() => handleNavigate('tiptag')} className={getLinkClassName('tiptag')}>TipTag</a>
          <a onClick={() => handleNavigate('prediction')} className={getLinkClassName('prediction')}>TagAI - Prediction</a>
          <a onClick={() => handleNavigate('tagai')} className={getLinkClassName('tagai')}>TagAI</a>
          <a onClick={() => handleNavigate('donut')} className={getLinkClassName('donut')}>Donut</a>
          <a onClick={() => handleNavigate('about')} className={getLinkClassName('about')}>About US</a>
          <a href="https://tagai.gitbook.io/wh3/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">WIKI</a>
        </div>
      </div>
    </>
  );
};
