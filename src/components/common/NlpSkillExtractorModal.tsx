import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Cpu, X, Play, CheckCircle, ArrowRight, Layers, Database, Sparkles, BookOpen } from 'lucide-react';

interface ExtractedSkill {
  rawMention: string;
  canonicalName: string;
  category: string;
  confidencePct: number;
  inCurriculum: boolean;
  matchingCourse?: string;
}

export const NlpSkillExtractorModal: React.FC = () => {
  const { isNlpModalOpen, setIsNlpModalOpen, showNotification, setActiveNav } = useApp();

  const presets = [
    {
      label: 'Software / Python Role',
      text: 'Looking for a senior Python developer with Django, REST API development, PostgreSQL database optimization, and Docker containerization experience in Pune.'
    },
    {
      label: 'EV Technician Role',
      text: 'Urgent requirement for EV Battery Assembly Technician in Chakan. Must have hands-on experience in EV battery management, BMS diagnostics, high voltage safety disconnect, and CAN bus harness wiring.'
    },
    {
      label: 'Industrial Automation Role',
      text: 'Hiring Automation Specialist with PLC programming (Siemens S7), SCADA interface design, industrial sensor wiring, pneumatics, and robotic welding maintenance.'
    },
    {
      label: 'Data Analyst Role',
      text: 'Looking for Data Analyst proficient in SQL query tuning, Python data extraction with Pandas, Power BI dashboard design, and basic statistics for MIS reporting.'
    }
  ];

  const [inputText, setInputText] = useState(presets[0].text);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedSkills, setExtractedSkills] = useState<ExtractedSkill[] | null>(null);

  // Normalization dictionary
  const skillKnowledgeBase: Record<string, { canonical: string; category: string; inCurriculum: boolean; course?: string }> = {
    'python': { canonical: 'Python Programming', category: 'Programming Languages', inCurriculum: false, course: 'COPA (CTS-014)' },
    'django': { canonical: 'Django Web Framework', category: 'Backend Frameworks', inCurriculum: false, course: 'COPA (CTS-014)' },
    'rest api': { canonical: 'REST API Architecture', category: 'Web Architecture', inCurriculum: false, course: 'COPA (CTS-014)' },
    'restful api': { canonical: 'REST API Architecture', category: 'Web Architecture', inCurriculum: false, course: 'COPA (CTS-014)' },
    'postgresql': { canonical: 'PostgreSQL Relational DB', category: 'Database Systems', inCurriculum: false, course: 'COPA (CTS-014)' },
    'docker': { canonical: 'Docker Containerization', category: 'DevOps & Infrastructure', inCurriculum: false, course: 'COPA (CTS-014)' },
    'ev battery': { canonical: 'EV Battery Management (BMS)', category: 'Automotive & EV', inCurriculum: false, course: 'Electrician (CTS-018)' },
    'bms': { canonical: 'EV Battery Management (BMS)', category: 'Automotive & EV', inCurriculum: false, course: 'Electrician (CTS-018)' },
    'high voltage': { canonical: 'High Voltage Safety Disconnect', category: 'Industrial Safety', inCurriculum: false, course: 'Electrician (CTS-018)' },
    'can bus': { canonical: 'CAN Bus Vehicle Diagnostics', category: 'Automotive Electronics', inCurriculum: false, course: 'Motor Mechanic' },
    'plc': { canonical: 'PLC Programming (Siemens/AB)', category: 'Industrial Automation', inCurriculum: false, course: 'Machinist / Electrician' },
    'scada': { canonical: 'SCADA Supervisory Systems', category: 'Industrial Automation', inCurriculum: false, course: 'Instrumentation' },
    'pneumatics': { canonical: 'Industrial Pneumatics & Hydraulics', category: 'Mechanical Systems', inCurriculum: true, course: 'Fitter (CTS-005)' },
    'sql': { canonical: 'SQL Database Management', category: 'Database Systems', inCurriculum: false, course: 'COPA (CTS-014)' },
    'power bi': { canonical: 'Power BI Business Intelligence', category: 'Analytics & Reporting', inCurriculum: false, course: 'COPA (CTS-014)' },
    'pandas': { canonical: 'Python Data Extraction (Pandas)', category: 'Data Engineering', inCurriculum: false, course: 'COPA (CTS-014)' },
    'statistics': { canonical: 'Applied Business Statistics', category: 'Quantitative Analysis', inCurriculum: false, course: 'COPA (CTS-014)' },
    'wiring': { canonical: 'Electrical Wiring & Safety', category: 'Electrical Trades', inCurriculum: true, course: 'Electrician (CTS-018)' }
  };

  const runNlpExtraction = () => {
    setIsProcessing(true);
    setExtractedSkills(null);

    setTimeout(() => {
      const lower = inputText.toLowerCase();
      const results: ExtractedSkill[] = [];
      const seenCanonical = new Set<string>();

      Object.entries(skillKnowledgeBase).forEach(([key, meta]) => {
        if (lower.includes(key)) {
          if (!seenCanonical.has(meta.canonical)) {
            seenCanonical.add(meta.canonical);
            results.push({
              rawMention: key,
              canonicalName: meta.canonical,
              category: meta.category,
              confidencePct: Math.floor(88 + Math.random() * 11),
              inCurriculum: meta.inCurriculum,
              matchingCourse: meta.course
            });
          }
        }
      });

      if (results.length === 0) {
        results.push({
          rawMention: 'technical requirements',
          canonicalName: 'Generic Technical Proficiency',
          category: 'General Technical',
          confidencePct: 75,
          inCurriculum: true,
          matchingCourse: 'General ITI'
        });
      }

      setExtractedSkills(results);
      setIsProcessing(false);
      showNotification(`NLP Engine extracted ${results.length} canonical skills and normalized vocabulary.`);
    }, 450);
  };

  if (!isNlpModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded border border-slate-400 w-full max-w-4xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0A3A60] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D96B27]">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-wide">
                NLP Labour Market Skill Extraction & Normalization Engine
              </h2>
              <p className="text-[11px] text-slate-300">
                spaCy / Scikit-Learn Pipeline Simulation for SIH Problem Statement 134
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsNlpModalOpen(false)}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-[#072640] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-xs text-slate-600 mb-3">
            Enter any unstructured job posting or selection criterion below. The NLP pipeline parses tokens, resolves semantic aliases (e.g., <em>"REST APIs" / "RESTful service" → REST API Architecture</em>), and benchmarks against Directorate of Vocational Education & Training (DVET) curriculum coverage.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold text-slate-700">Sample Postings:</span>
            {presets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputText(p.text);
                  setExtractedSkills(null);
                }}
                className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-slate-800 cursor-pointer font-medium"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Text Area Input */}
          <div className="mb-4">
            <textarea
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full text-xs p-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#0A3A60] outline-none"
              placeholder="Paste raw job description text here..."
            />
          </div>

          {/* Action Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-[11px] text-slate-500">
              Pipeline: Regex Tokenizer → Named Entity Recognition (NER) → Synonym Lemmatizer → DGT Registry Mapper
            </div>
            <button
              type="button"
              onClick={runNlpExtraction}
              disabled={isProcessing || !inputText.trim()}
              className="flex items-center gap-2 bg-[#0A3A60] hover:bg-[#072640] text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer disabled:opacity-50 shadow-xs"
            >
              {isProcessing ? (
                <>Processing NLP Pipeline...</>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Execute Extraction & Normalization</span>
                </>
              )}
            </button>
          </div>

          {/* Results Display */}
          {extractedSkills && (
            <div className="border border-slate-300 rounded overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Extracted Canonical Skills ({extractedSkills.length})
                </span>
                <span className="text-[11px] text-slate-500">
                  State Taxonomy v2.4 Match
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="gov-table text-xs">
                  <thead>
                    <tr>
                      <th>Raw Extracted Mention</th>
                      <th>Canonical Skill (Standardized)</th>
                      <th>Skill Domain</th>
                      <th>NLP Confidence</th>
                      <th>State ITI Curriculum Status</th>
                      <th>Target Revision Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extractedSkills.map((sk, i) => (
                      <tr key={i}>
                        <td className="text-slate-600 bg-slate-50/50">
                          "{sk.rawMention}"
                        </td>
                        <td className="font-bold text-slate-900">
                          {sk.canonicalName}
                        </td>
                        <td className="text-slate-600">
                          {sk.category}
                        </td>
                        <td className="text-slate-700 tabular-nums">
                          {sk.confidencePct}%
                        </td>
                        <td>
                          {sk.inCurriculum ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-semibold">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              Covered in Syllabus
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-300 font-semibold">
                              Missing / Gap Identified
                            </span>
                          )}
                        </td>
                        <td className="text-slate-700 font-medium">
                          {sk.matchingCourse || 'General Vocational'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-blue-50 border-t border-slate-300 flex items-center justify-between text-xs">
                <span className="text-blue-900">
                  <strong>Recommendation:</strong> {extractedSkills.filter(s => !s.inCurriculum).length} missing skills identified. Ready to generate revision recommendations for DGT Curriculum Board.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsNlpModalOpen(false);
                    setActiveNav('curriculum');
                  }}
                  className="bg-[#0A3A60] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#072640] cursor-pointer whitespace-nowrap"
                >
                  View Curriculum Alignment →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
