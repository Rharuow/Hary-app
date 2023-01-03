import React from "react";

import Avatar from "../../../Avatar";
import Navigation from "../../../Navigation";

const Information = () => {
  return (
    <div className="d-flex flex-column-reverse min-h-100vh flex-warp pt-4 pb-0 pe-0 w-50">
      <Avatar
        width={357}
        height={500}
        className="align-self-end"
        style={{ zIndex: 1000 }}
      />
      <Navigation
        className="w-100 flex-column flex-sm-row flex-grow-1 justify-content-sm-around"
        justifyContent="start"
      />
    </div>
  );
};

export default Information;
