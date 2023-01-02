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
        {translate.apresentation[language as keyof Language]}
      </p>
      <h1 className="text-yellow">Web</h1>
      <h1 className="text-gray-300">Desenvolvedor</h1>
    </div>
  );
};

export default Apresentation;
