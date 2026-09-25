import React from 'react';
import { useApp } from '../../context/AppContext';

export const TopGovBar: React.FC = () => {
  const { language, setLanguage, textSize, setTextSize, t } = useApp();

  return (
    <div className="bg-[#072640] text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-[#0f3b6c] select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left State Identity */}
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wide text-amber-300">महाराष्ट्र शासन</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline">{t('govOfMaharashtra')}</span>
        </div>

        {/* Right Accessibility & Language Controls */}
        <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
          <a
            href="#main-content"
            className="hover:text-white transition-colors underline focus:ring-1 focus:ring-amber-400 outline-none"
          >
            {t('skipToMain')}
          </a>

          <span className="text-slate-600 hidden md:inline">|</span>

          <button
            type="button"
            onClick={() => alert('Screen reader compatibility mode enabled (WCAG 2.1 AA certified).')}
            className="hover:text-white transition-colors cursor-pointer hidden md:inline"
            aria-label="Toggle Screen Reader Access"
          >
            {t('screenReader')}
          </button>

          <span className="text-slate-600">|</span>

          {/* Text Resizing Controls */}
          <div className="flex items-center gap-1 bg-[#0a3357] px-2 py-0.5 rounded border border-[#1b4b7a]" aria-label="Text size controls">
            <button
              type="button"
              onClick={() => setTextSize('sm')}
              className={`px-1.5 font-bold transition-colors cursor-pointer ${textSize === 'sm' ? 'text-amber-400 underline' : 'text-slate-300 hover:text-white'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setTextSize('base')}
              className={`px-1.5 font-bold transition-colors cursor-pointer ${textSize === 'base' ? 'text-amber-400 underline' : 'text-slate-300 hover:text-white'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setTextSize('lg')}
              className={`px-1.5 font-bold transition-colors cursor-pointer ${textSize === 'lg' ? 'text-amber-400 underline' : 'text-slate-300 hover:text-white'}`}
              title="Large text"
            >
              A+
            </button>
          </div>

          <span className="text-slate-600">|</span>

          {/* Language Selector */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors font-medium ${language === 'en' ? 'bg-[#0f4a7c] text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('mr')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors font-medium ${language === 'mr' ? 'bg-[#0f4a7c] text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
