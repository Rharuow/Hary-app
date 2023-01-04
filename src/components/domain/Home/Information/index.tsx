import React from "react";

import { useWindowSize } from "../../../../Hooks/windowsize";
import Avatar from "../../../Avatar";
import Navigation from "../../../Navigation";

const Information = () => {
  const { isMobile, windowSize } = useWindowSize();

  console.log("isMobile = ", isMobile);
  console.log("windowSize = ", windowSize);

  return (
    <div
      className={
        isMobile
          ? "position-static end-0 z-index-100"
          : "d-flex flex-column-reverse min-h-100vh flex-warp pt-4 pb-0 pe-0 w-30"
      }
    >
      {!isMobile && (
        <Avatar width={257} height={360} className="align-self-end" />
      )}
      <Navigation
        className="w-100 flex-column flex-sm-row flex-grow-1 justify-content-sm-around"
        justifyContent="start"
      />
    </div>
  );
};

export default Information;
