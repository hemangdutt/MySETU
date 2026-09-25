import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, ExternalLink, Info, CheckCircle2 } from 'lucide-react';

export const GovFooter: React.FC = () => {
  const { t, language } = useApp();

  return (
    <footer className="bg-[#071f33] text-slate-300 border-t-4 border-[#0A3A60] mt-12 text-xs">
      
      {/* Transparency & Data Source Strip */}
      <div className="bg-[#051726] border-b border-[#0d304f] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Data Source Disclosure:</strong> Demonstration dataset synthesized from Maharashtra Vocational Registers (DVET), ASDC, Periodic Labour Force Survey (PLFS), and normalized web postings for SIH Problem Statement 134.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>WCAG 2.1 AA Compliant</span>
            </span>
            <span>·</span>
            <span className="text-slate-300">NIC Standards Guidelines</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Government Authority */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <h3 className="text-white font-bold text-sm tracking-wide">
                {language === 'mr' ? 'महाराष्ट्र शासन' : 'Government of Maharashtra'}
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {t('footerGovDept')}<br />
              {t('footerDepartment')}
            </p>
            <p className="text-[11px] text-slate-400 leading-normal">
              3, Mahapalika Marg, Post Box No. 219, Dhobi Talao, Chhatrapati Shivaji Maharaj Terminus, Mumbai, Maharashtra 400001.
            </p>
          </div>

          {/* Col 2: Institutional Portals */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 border-b border-slate-700 pb-1">
              {language === 'mr' ? 'शासकीय दुवे' : 'Government Portals'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 list-none p-0 m-0">
              <li>
                <a href="https://www.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Maharashtra State Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://mahaswayam.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Mahaswayam Integrated Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://dvet.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>DVET Maharashtra Official</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://www.skillindiadigital.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Skill India Digital Hub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Policy Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 border-b border-slate-700 pb-1">
              {language === 'mr' ? 'धोरणे आणि अटी' : 'Legal & Compliance'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 list-none p-0 m-0">
              <li><a href="#accessibility" className="hover:text-white">{t('footerAccessibility')}</a></li>
              <li><a href="#privacy" className="hover:text-white">{t('footerPrivacy')}</a></li>
              <li><a href="#terms" className="hover:text-white">{t('footerTerms')}</a></li>
              <li><a href="#sitemap" className="hover:text-white">{t('footerSitemap')}</a></li>
              <li><a href="#help" className="hover:text-white">{t('footerHelp')}</a></li>
            </ul>
          </div>

          {/* Col 4: Platform Metadata */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 border-b border-slate-700 pb-1">
              {language === 'mr' ? 'व्यासपीठ माहिती' : 'Platform Version'}
            </h4>
            <div className="bg-[#0b2842] p-3 rounded border border-slate-700 text-[11px] text-slate-300 space-y-1">
              <p><strong>App:</strong> MySETU v2.4 (Prod-Ready)</p>
              <p><strong>Track:</strong> SIH 2026 Problem Statement 134</p>
              <p><strong>Focus:</strong> Industry Demand & Skill Alignment</p>
              <p className="text-amber-300 pt-1 border-t border-slate-700">{t('footerLastUpdated')}</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            © 2026 Government of Maharashtra. All Rights Reserved. {t('footerContentManaged')}.
          </p>
          <p className="text-slate-500">
            Designed for State & District Labour Market Planning · High-Density NIC Framework
          </p>
        </div>

      </div>
    </footer>
  );
};
