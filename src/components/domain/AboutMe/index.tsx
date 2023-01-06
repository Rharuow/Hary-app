import React from "react";
import { useLanguageContext } from "../../../context/LanguageContext";
import Navigation from "../../Navigation";

import { translate, Language } from "../../../translate";

const AboutMe = () => {
  const { language } = useLanguageContext();
  return (
    <div className=" d-flex justify-content-center algin-items-center p-4 flex-wrap z-index-1000">
      <div className="transform-translate-top-20px transform-hover z-index-1000">
        {translate[language as keyof Language].aboutMe}
      </div>
    </div>
  );
};

export default AboutMe;
