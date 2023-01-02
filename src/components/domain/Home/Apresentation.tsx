import React from "react";
import { useLanguageContext } from "../../../app/Language";
import { translate, Language } from "../../../translate";

const Apresentation = () => {
  const { language } = useLanguageContext();

  return (
    <div
      className="d-flex flex-column-reverse p-4 w-50"
      style={{ zIndex: 2000 }}
    >
      <p className="text-gray-400">
        {translate[language as keyof Language].apresentation.description}
      </p>
      {translate[language as keyof Language].apresentation.title}
    </div>
  );
};

export default Apresentation;
