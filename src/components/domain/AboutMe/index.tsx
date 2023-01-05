import React from "react";
import { useLanguageContext } from "../../../context/LanguageContext";
import Navigation from "../../Navigation";

import { translate, Language } from "../../../translate";

const AboutMe = () => {
  const { language } = useLanguageContext();
  return (
    <div className="min-h-100vh d-flex justify-content-center algin-items-center p-4 flex-wrap">
      <div style={{ zIndex: 1000 }}>
        {translate[language as keyof Language].aboutMe}
      </div>
    </div>
  );
};

export default AboutMe;
