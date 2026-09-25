import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Upload, RefreshCw } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const {
    t,
    searchQuery,
    setSearchQuery,
    searchCategory,
    setSearchCategory,
    setActiveNav,
    showNotification
  } = useApp();

  const [bannerSrc, setBannerSrc] = useState<string>('/banner.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mysetu_custom_banner');
    if (saved) {
      setBannerSrc(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setBannerSrc(result);
          try {
            localStorage.setItem('mysetu_custom_banner', result);
          } catch (err) {
            // Storage quota fallback
          }
          showNotification('Banner updated with your exact uploaded image.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetBanner = () => {
    localStorage.removeItem('mysetu_custom_banner');
    setBannerSrc('/banner.png');
    showNotification('Banner reset to official state graphic.');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveNav('skills');
    }
  };

  return (
    <div className="relative overflow-hidden border-b-2 border-slate-300 min-h-[380px] sm:min-h-[430px] flex flex-col justify-between bg-slate-100 group">
      
      {/* 1. Official Banner Image as full background */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <img
          src={bannerSrc}
          alt="Government of Maharashtra Official Dignitaries Banner"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft center illumination scrim to guarantee WCAG AA contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/70 to-white/10" />
      </div>

      {/* Hidden File Input for direct image loading */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Unobtrusive Banner Controls (top-right hover toolbar) */}
      <div className="absolute top-2 right-3 z-20 flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity bg-white/90 p-1 rounded border border-slate-300 shadow-2xs text-[11px]">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-[#0A3A60] hover:text-white rounded text-slate-700 transition-colors font-semibold cursor-pointer"
          title="Upload or replace with exact banner.png from your device"
        >
          <Upload className="w-3 h-3" />
          <span>Upload banner.png</span>
        </button>
        {bannerSrc !== '/banner.png' && (
          <button
            type="button"
            onClick={handleResetBanner}
            className="p-1 hover:bg-slate-200 text-slate-600 rounded cursor-pointer"
            title="Reset to default banner"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* 2. Banner Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center flex-1 flex flex-col justify-center">
        
        {/* Government Badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 border border-[#0A3A60]/30 px-3.5 py-1 rounded shadow-xs text-xs font-semibold text-[#0A3A60] mb-3 mx-auto tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#D96B27]" />
          <span>{t('heroTag')}</span>
        </div>

        {/* Hero Title in Noto Sans */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#072640] mb-2 leading-tight">
          {t('heroHeading')}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-800 font-medium max-w-2xl mx-auto mb-6 leading-relaxed bg-white/70 backdrop-blur-[1px] py-1 px-3 rounded">
          {t('heroSubheading')}
        </p>

        {/* Functional Search Console (Matches Reference 1) */}
        <div className="max-w-2xl mx-auto w-full bg-white rounded p-2 sm:p-2.5 shadow-md border border-slate-300">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch gap-2">
            
            {/* Category Dropdown */}
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-slate-50 text-slate-800 text-xs px-3 py-2.5 rounded border border-slate-300 outline-none cursor-pointer font-medium sm:w-44"
              aria-label="Filter category"
            >
              <option value="all">{t('categoryAll')}</option>
              <option value="skills">{t('categorySkills')}</option>
              <option value="occupations">{t('categoryOccupations')}</option>
              <option value="courses">{t('categoryCourses')}</option>
              <option value="districts">{t('categoryDistricts')}</option>
              <option value="reports">{t('categoryReports')}</option>
            </select>

            {/* Input field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full text-xs text-slate-900 px-3 py-2.5 bg-white rounded border border-slate-300 outline-none focus:border-[#0A3A60] placeholder-slate-400"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#0A3A60] hover:bg-[#072640] text-white px-6 py-2.5 rounded text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{t('searchButton')}</span>
            </button>

          </form>
        </div>

        {/* Portal Carousel Dots (Indian NIC Standard) */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <button className="w-2.5 h-2.5 rounded-full bg-[#0A3A60] transition-all cursor-pointer" aria-label="Slide 1 active" />
          <button className="w-2 h-2 rounded-full bg-[#0A3A60]/40 hover:bg-[#0A3A60]/70 transition-all cursor-pointer" aria-label="Slide 2" />
          <button className="w-2 h-2 rounded-full bg-[#0A3A60]/40 hover:bg-[#0A3A60]/70 transition-all cursor-pointer" aria-label="Slide 3" />
          <button className="w-2 h-2 rounded-full bg-[#0A3A60]/40 hover:bg-[#0A3A60]/70 transition-all cursor-pointer" aria-label="Slide 4" />
        </div>

      </div>

      {/* Decorative lower bar */}
      <div className="relative z-10 bg-[#072640] text-slate-200 py-1.5 px-4 text-center text-[11px] border-t border-[#0e436e]">
        <span>सूचना: महाराष्ट्र राज्यातील ३६ जिल्ह्यांचा श्रम बाजार बुद्धिमत्ता अहवाल Q2 2026 प्रसिद्ध करण्यात आला आहे.</span>
      </div>

    </div>
  );
};


