import React from "react";

import Avatar from "../../../Avatar";
import Navigation from "./Navigation";

const Information = () => {
  return (
    <div className="d-flex flex-column-reverse pb-0 pe-0 w-50">
      <Avatar width={357} height={500} className="align-self-end" />
      <Navigation className="align-self-center" />
    </div>
  );
};

export default Information;
