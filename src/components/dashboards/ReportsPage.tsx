import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, Download, Printer, Search, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { districtsData } from '../../data/districtsData';

export const ReportsPage: React.FC = () => {
  const { setIsReportModalOpen, selectedDistrict, setSelectedDistrict, language } = useApp();
  const [reportType, setReportType] = useState('all');

  const reportList = [
    {
      ref: 'GoM/DVET/LMI/2026/0925-PUN',
      title: 'District Skill Demand & Training Capacity Assessment: Pune District',
      date: '25 Sep 2026',
      type: 'District Plan',
      sector: 'Multi-Sector (IT & Auto)',
      size: '1.4 MB'
    },
    {
      ref: 'GoM/DVET/CURR/2026/COPA-014',
      title: 'Curriculum Alignment Audit & Revision Proposal: COPA (CTS-014)',
      date: '18 Sep 2026',
      type: 'Curriculum',
      sector: 'IT & ITES',
      size: '2.1 MB'
    },
    {
      ref: 'GoM/DVET/EV/2026/CHAKAN-08',
      title: 'Electric Vehicle Powertrain & Battery Diagnostic Labour Requirements: Chakan Cluster',
      date: '12 Sep 2026',
      type: 'Industry Sector',
      sector: 'Automotive & EV',
      size: '3.6 MB'
    },
    {
      ref: 'GoM/DVET/ANNUAL/2026/STATE-LMI',
      title: 'Maharashtra Annual Labour Market Intelligence Bulletin: 36 Districts Synthesis',
      date: '02 Sep 2026',
      type: 'State Gazette',
      sector: 'All Technical Trades',
      size: '5.2 MB'
    },
    {
      ref: 'GoM/DVET/EQUIP/2026/LABS-24',
      title: 'Statewide ITI Infrastructure & Laboratory Equipment Modernization Audit',
      date: '28 Aug 2026',
      type: 'Infrastructure',
      sector: 'Manufacturing & CNC',
      size: '1.8 MB'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Title */}
      <div className="bg-white p-5 rounded border border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Official Document Repository
            </span>
            <span className="text-xs text-slate-500">· Directorate of Vocational Education & Training</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Reports & Gazetted Publications
          </h1>
          <p className="text-xs text-slate-600">
            Official labour market assessments, district skill plans, curriculum review audits, and placement outcomes
          </p>
        </div>

        <button
          onClick={() => setIsReportModalOpen(true)}
          className="bg-[#0A3A60] hover:bg-[#072640] text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer shadow-xs flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Generate Custom District Report</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded border border-slate-300 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-slate-700">Filter Reports:</span>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="p-1.5 bg-slate-50 border border-slate-300 rounded font-medium text-slate-800"
          >
            <option value="all">All Districts (Statewide)</option>
            {districtsData.map((d) => (
              <option key={d.id} value={d.id}>
                {language === 'mr' ? d.nameMr : d.nameEn}
              </option>
            ))}
          </select>

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="p-1.5 bg-slate-50 border border-slate-300 rounded font-medium text-slate-800"
          >
            <option value="all">All Document Types</option>
            <option value="district">District Plans</option>
            <option value="curriculum">Curriculum Audits</option>
            <option value="sector">Sector Studies</option>
          </select>
        </div>

        <div className="text-[11px] text-slate-500">
          Showing 5 verified gazetted documents · GoM DVET Archive
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded border border-slate-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="gov-table text-xs">
            <thead>
              <tr>
                <th>Document Reference</th>
                <th>Report Title & Subject</th>
                <th>Publication Date</th>
                <th>Category</th>
                <th>Sector</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reportList.map((rep, idx) => (
                <tr key={idx}>
                  <td className="text-slate-700 font-semibold">{rep.ref}</td>
                  <td className="font-bold text-slate-900">{rep.title}</td>
                  <td className="tabular-nums">{rep.date}</td>
                  <td>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-700">
                      {rep.type}
                    </span>
                  </td>
                  <td className="text-slate-600">{rep.sector}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsReportModalOpen(true)}
                        className="text-[#0A3A60] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => setIsReportModalOpen(true)}
                        className="text-slate-600 hover:text-black font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Printer className="w-3 h-3" />
                        <span>Print</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
