import React, { createContext, ReactNode, useContext, useState } from "react";

const LanguageContext = createContext(
  {} as {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const useLanguageContext = () => useContext(LanguageContext);

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("US");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
