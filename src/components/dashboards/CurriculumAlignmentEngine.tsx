import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { coursesData } from '../../data/coursesData';
import { BookOpen, Check, AlertTriangle, Download, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export const CurriculumAlignmentEngine: React.FC = () => {
  const { showNotification, setIsReportModalOpen, setIsNlpModalOpen } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-copa');

  const course = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Title */}
      <div className="bg-white p-5 rounded border border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              State Curriculum Alignment Engine
            </span>
            <span className="text-xs text-slate-500">· DVET Technical Syllabus Modernization Cell</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Curriculum Alignment & Syllabus Gap Diagnostic
          </h1>
          <p className="text-xs text-slate-600">
            Compare DGT National Trade Certificates against active Maharashtra industry requisitions
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsNlpModalOpen(true)}
            className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-1.5 rounded text-xs font-semibold cursor-pointer shadow-xs flex items-center gap-1.5"
          >
            <span>Test NLP Extraction</span>
          </button>
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 inline mr-1" />
            <span>Export Alignment Audit</span>
          </button>
        </div>
      </div>

      {/* Course Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coursesData.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedCourseId(c.id)}
            className={`p-4 rounded border cursor-pointer transition-all flex flex-col justify-between ${
              selectedCourseId === c.id
                ? 'border-[#0A3A60] bg-blue-50/50 ring-2 ring-[#0A3A60]'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-slate-500">{c.code}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                  c.status === 'Needs Update'
                    ? 'bg-red-50 text-red-800 border-red-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  {c.status}
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {c.title}
              </h2>
              <p className="text-[11px] text-slate-500 mt-1">
                Sector: {c.sector} · {c.durationMonths} Months
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-600">Alignment Score:</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {c.currentAlignmentPct}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Comparison Table */}
      <div className="bg-white p-6 rounded border border-slate-300 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Module-by-Module Competency Analysis: {course.title}
            </h2>
            <p className="text-xs text-slate-500">
              Baseline syllabus compared against 4,300+ employer skill validations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Audit Status:</span>
            <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              Needs Immediate Revision (Alignment: {course.currentAlignmentPct}%)
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="gov-table text-xs">
            <thead>
              <tr>
                <th className="w-1/3">Current DGT Syllabus Modules</th>
                <th className="w-1/3">Industry Demanded Skill Competencies</th>
                <th>Status</th>
                <th>Prescribed Action & Credit Hours</th>
              </tr>
            </thead>
            <tbody>
              {/* Covered rows */}
              {course.coveredSkills.map((sk, idx) => (
                <tr key={`cov-${idx}`}>
                  <td className="font-semibold text-slate-800">
                    {sk.name}
                  </td>
                  <td className="text-slate-600">
                    Matches current IT/ITES foundational requirement
                  </td>
                  <td>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                      <Check className="w-3 h-3 text-emerald-600" /> Covered ({sk.hours}h)
                    </span>
                  </td>
                  <td className="text-slate-600">
                    Retain module, modernize practical lab assignments
                  </td>
                </tr>
              ))}

              {/* Missing rows */}
              {course.missingSkills.map((sk, idx) => (
                <tr key={`miss-${idx}`} className="bg-red-50/20">
                  <td className="text-slate-400 italic">
                    [Not present in standard syllabus]
                  </td>
                  <td className="font-bold text-red-950">
                    {sk.name}
                    <span className="block text-[10px] text-slate-500 font-normal">
                      Citing demand frequency: {sk.industryDemandPct}% of job postings
                    </span>
                  </td>
                  <td>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded border border-red-300">
                      <AlertTriangle className="w-3 h-3 text-red-600" /> Missing
                    </span>
                  </td>
                  <td className="font-medium text-slate-800">
                    {sk.suggestedModule} (+{sk.recommendedHours} hrs required)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action strip */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded">
          <div className="text-xs text-slate-700">
            <strong>State Committee Protocol:</strong> Approved proposals are gazetted under Maharashtra Vocational Training Board circulars.
          </div>
          <button
            onClick={() => showNotification(`Formal syllabus amendment draft generated for ${course.title}. Dispatched to State Board.`)}
            className="bg-[#D96B27] hover:bg-[#b85519] text-white px-4 py-2 rounded text-xs font-bold cursor-pointer transition-colors shadow-xs shrink-0"
          >
            Generate Official DGT Revision Proposal
          </button>
        </div>

      </div>

    </div>
  );
};
