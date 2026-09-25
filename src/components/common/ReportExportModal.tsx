import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Printer, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { districtsData } from '../../data/districtsData';

export const ReportExportModal: React.FC = () => {
  const { isReportModalOpen, setIsReportModalOpen, selectedDistrict, showNotification, t } = useApp();

  if (!isReportModalOpen) return null;

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCsv = () => {
    const csvContent = `District,JobPostings,Growth,TopSector,HighDemandSkillsCount,CapacityDeficit,InstitutesCount\n` +
      districtsData.map(d => `"${d.nameEn}",${d.jobPostings},"${d.postingsGrowth}%","${d.topSector}",${d.highDemandSkillsCount},${d.capacityDeficit},${d.institutesCount}`).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `MySETU_Maharashtra_Skill_Report_${selectedDistrict}_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Official CSV report downloaded successfully.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded border border-slate-400 w-full max-w-4xl shadow-2xl overflow-hidden my-6">
        
        {/* Header (No print) */}
        <div className="bg-[#0A3A60] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D96B27] no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-wide">
                Official Labour Market Intelligence Report
              </h2>
              <p className="text-[11px] text-slate-300">
                Government of Maharashtra · Directorate of Vocational Education & Training
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-[#0e4b7b] hover:bg-[#12588f] text-white px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadCsv}
              className="flex items-center gap-1.5 bg-[#D96B27] hover:bg-[#b85418] text-white px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => setIsReportModalOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-[#072640] cursor-pointer ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Document */}
        <div className="p-8 max-h-[75vh] overflow-y-auto text-slate-900 bg-white">
          
          {/* Official Letterhead */}
          <div className="text-center border-b-2 border-slate-800 pb-4 mb-6">
            <div className="flex justify-center mb-1">
              <ShieldCheck className="w-10 h-10 text-[#0A3A60]" />
            </div>
            <h1 className="text-lg font-bold uppercase tracking-wider text-slate-900">
              Government of Maharashtra
            </h1>
            <h2 className="text-sm font-semibold text-slate-700">
              Skill, Employment, Entrepreneurship & Innovation Department
            </h2>
            <h3 className="text-xs text-slate-600 font-sans">
              Directorate of Vocational Education & Training (DVET) · MySETU Intelligence Cell
            </h3>
            <p className="text-[11px] text-slate-500 font-sans mt-1">
              Report Ref: GoM/DVET/LMI/2026/PUNE-0925 · Dispatch Date: 25 September 2026
            </p>
          </div>

          {/* Title & Metadata */}
          <div className="mb-6 font-sans">
            <div className="bg-slate-100 p-4 rounded border border-slate-300">
              <h2 className="text-base font-bold text-[#0A3A60] mb-1">
                District Skill Demand, Supply & Training Capacity Assessment: {currentDist.nameEn} ({currentDist.nameMr})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mt-3">
                <div>
                  <span className="text-slate-500 block">Assessment Period:</span>
                  <span className="font-semibold">Oct 2025 – Sep 2026</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Lead Industrial Sector:</span>
                  <span className="font-semibold">{currentDist.topSector}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Active Verified Postings:</span>
                  <span className="font-semibold tabular-nums">{currentDist.jobPostings.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Net Training Deficit:</span>
                  <span className="font-semibold text-red-700 tabular-nums">-{currentDist.capacityDeficit.toLocaleString('en-IN')} seats/yr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Executive Findings */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2 font-sans text-slate-800">
              1. Executive Summary & Demand Diagnosis
            </h3>
            <p className="text-xs leading-relaxed text-slate-800 mb-3">
              Analysis of verified labour market postings within {currentDist.nameEn} indicates an annualised job creation rate expanding at <strong className="font-semibold">+{currentDist.postingsGrowth}%</strong> year-on-year. The primary growth nodes are concentrated in {currentDist.topSector}, with secondary surges in electric mobility powertrain maintenance and precision industrial automation.
            </p>
            <p className="text-xs leading-relaxed text-slate-800">
              The aggregate sanctioned intake capacity across the {currentDist.institutesCount} government and private ITIs in the district stands at <strong className="font-semibold">{currentDist.trainingCapacity.toLocaleString('en-IN')}</strong>, against projected industry absorption of <strong className="font-semibold">{currentDist.jobPostings.toLocaleString('en-IN')}</strong>, leaving a localized capacity shortfall of <strong className="text-red-700 font-semibold">{currentDist.capacityDeficit.toLocaleString('en-IN')} seats</strong> in specialized trades.
            </p>
          </div>

          {/* Section 2: In-Demand Technical Roles */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2 font-sans text-slate-800">
              2. Priority Occupations & Industry Demand
            </h3>
            <table className="gov-table text-xs font-sans">
              <thead>
                <tr>
                  <th>Job Role / Occupation</th>
                  <th>Verified Postings</th>
                  <th>YoY Growth</th>
                  <th>Primary Technical Competencies Required</th>
                </tr>
              </thead>
              <tbody>
                {currentDist.topRoles.map((r, i) => (
                  <tr key={i}>
                    <td className="font-bold">{r.role}</td>
                    <td className="tabular-nums">{r.postings.toLocaleString('en-IN')}</td>
                    <td className="tabular-nums text-emerald-800 font-semibold">+{r.growth}%</td>
                    <td>{currentDist.topSkills.slice(0, 3).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3: Recommended Government Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2 font-sans text-slate-800">
              3. Mandated Administrative Actions for District Planning Committee
            </h3>
            <ul className="list-disc pl-5 text-xs font-sans space-y-1.5 text-slate-800">
              {currentDist.recommendedActions.map((act, i) => (
                <li key={i} className="leading-normal">
                  {act}
                </li>
              ))}
            </ul>
          </div>

          {/* Signoff Plinth */}
          <div className="pt-8 border-t border-slate-300 font-sans grid grid-cols-2 text-xs">
            <div>
              <p className="font-bold text-slate-800">Approved by:</p>
              <p className="text-slate-600">State Labour Market Intelligence Unit (LMIU)</p>
              <p className="text-slate-500 text-[11px]">Directorate of Vocational Education & Training</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-800">Digital Seal & Verification:</p>
              <p className="text-emerald-700 text-[11px]">SHA-256: 4f9e8a1c...e12d7b</p>
              <p className="text-slate-500 text-[11px]">Signed on 25-09-2026 14:30 IST</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
