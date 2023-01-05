import React from "react";
import ReactTypingEffect from "react-typing-effect";

import { useLanguageContext } from "../../../context/LanguageContext";
import { useWindowSize } from "../../../Hooks/windowsize";
import { translate, Language } from "../../../translate";
import { makeHighlightText } from "../../../utils/keywords";
import Avatar from "../../Avatar";
import Navigation from "../../Navigation";
const Apresentation = () => {
  const { language } = useLanguageContext();

  const { isMobile } = useWindowSize();

  return (
    <div className="d-flex flex-wrap">
      <div className="d-flex p-4 w-100 flex-row-reverse flex-wrap justify-content-center">
        <div className="w-100">
          {translate[language as keyof Language].home.apresentation.title}
        </div>
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
        {!isMobile && (
          <div className="position-absolute bottom-0 end-0">
            <Avatar width={257} height={360} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Apresentation;
