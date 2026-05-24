import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import logoImage from '../assets/Logo.jpg';

const NAV_ITEMS = [
  { id: 'menu-section', label: 'MENU' },
  { id: 'about-section', label: 'OUR CRAFT' },
  { id: 'find-lab-section', label: 'FIND BRANCH' },
];

export function MainHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shadow-sm" id="lab-main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

        {/* Brand Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo('hero-section')}
        >
          <img
            src={logoImage}
            alt="11:11 Laban"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shadow-sm transition-transform group-hover:rotate-[11deg] duration-300"
          />
          <div>
            <h1 className="font-display text-2xl font-black text-laban-blue leading-none tracking-tight flex items-center gap-1.5">
              11:11 Laban
              <Sparkles className="w-4 h-4 text-laban-yellow animate-bounce" />
            </h1>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest font-sans mt-0.5">
              Original Dessert Labs
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display font-medium text-sm tracking-wide text-slate-600 hover:text-laban-blue hover:scale-105 transition-all focus:outline-none"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 space-y-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-3 py-2.5 text-sm font-bold text-slate-700 hover:text-laban-blue hover:bg-slate-50 rounded-xl font-display tracking-wide transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
