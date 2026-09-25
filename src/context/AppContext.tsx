import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole, Language, TextSize, EmployerRequirement } from '../types';
import { initialEmployerRequirements } from '../data/employerStudentData';
import { translations } from '../data/translations';

interface AppContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (districtId: string) => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedTimeRange: string;
  setSelectedTimeRange: (range: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchCategory: string;
  setSearchCategory: (cat: string) => void;
  employerRequirements: EmployerRequirement[];
  addEmployerRequirement: (req: Omit<EmployerRequirement, 'id' | 'submissionDate' | 'status'>) => void;
  notification: string | null;
  showNotification: (msg: string) => void;
  clearNotification: () => void;
  isRoleModalOpen: boolean;
  setIsRoleModalOpen: (open: boolean) => void;
  isNlpModalOpen: boolean;
  setIsNlpModalOpen: (open: boolean) => void;
  isReportModalOpen: boolean;
  setIsReportModalOpen: (open: boolean) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('public');
  const [language, setLanguage] = useState<Language>('en');
  const [textSize, setTextSize] = useState<TextSize>('base');
  const [activeNav, setActiveNav] = useState<string>('home');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('pune');
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('Last 1 Year');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('all');
  const [employerRequirements, setEmployerRequirements] = useState<EmployerRequirement[]>(initialEmployerRequirements);
  const [notification, setNotification] = useState<string | null>(null);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState<boolean>(false);
  const [isNlpModalOpen, setIsNlpModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((current) => (current === msg ? null : current));
    }, 4500);
  };

  const clearNotification = () => setNotification(null);

  const addEmployerRequirement = (req: Omit<EmployerRequirement, 'id' | 'submissionDate' | 'status'>) => {
    const newReq: EmployerRequirement = {
      ...req,
      id: `emp-req-${Date.now().toString().slice(-4)}`,
      submissionDate: 'Today (25 Sep 2026)',
      status: 'Pending Review'
    };
    setEmployerRequirements([newReq, ...employerRequirements]);
    showNotification('Requirement submitted successfully. Reference ID: ' + newReq.id + ' queued for SSC verification.');
  };

  const t = (key: string): string => {
    const dict = translations[language] || translations.en;
    return dict[key] || translations.en[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        language,
        setLanguage,
        textSize,
        setTextSize,
        activeNav,
        setActiveNav,
        selectedDistrict,
        setSelectedDistrict,
        selectedSector,
        setSelectedSector,
        selectedTimeRange,
        setSelectedTimeRange,
        searchQuery,
        setSearchQuery,
        searchCategory,
        setSearchCategory,
        employerRequirements,
        addEmployerRequirement,
        notification,
        showNotification,
        clearNotification,
        isRoleModalOpen,
        setIsRoleModalOpen,
        isNlpModalOpen,
        setIsNlpModalOpen,
        isReportModalOpen,
        setIsReportModalOpen,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
