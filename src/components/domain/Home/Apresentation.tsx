import React from "react";
import ReactTypingEffect from "react-typing-effect";

import { useLanguageContext } from "../../../context/LanguageContext";
import { useWindowSize } from "../../../Hooks/windowsize";
import { translate, Language } from "../../../translate";
import { makeHighlightText } from "../../../utils/keywords";
const Apresentation = () => {
  const { language } = useLanguageContext();

  const { isMobile } = useWindowSize();

  return (
    <div
      className={`d-flex p-4 ${
        isMobile
          ? "w-100 flex-row-reverse flex-wrap justify-content-center"
          : "flex-column-reverse w-70"
      }`}
      style={{ zIndex: 1001 }}
    >
      <ReactTypingEffect
        key={language}
        text={
          translate[language as keyof Language].home.apresentation.description
        }
        speed={10}
        eraseDelay={99999999999999}
        typingDelay={10}
        displayTextRenderer={(text) => makeHighlightText(text)}
      />
      <div className="w-100">
        {translate[language as keyof Language].home.apresentation.title}
      </div>
    </div>
  );
};

export default Apresentation;
