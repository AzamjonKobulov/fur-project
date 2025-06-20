"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context's value
interface LanguageContextType {
  selectedLang: string;
  setSelectedLang: (lang: string) => void;
}

// Create the context with a default value of `undefined`
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Custom hook to access the context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [selectedLang, setSelectedLang] = useState<string>("RU");

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
