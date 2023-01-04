import React from "react";
import dynamic from "next/dynamic";

const MyGoals = dynamic(import("../components/domain/MyGoals"), { ssr: false });

const MyGoalsPage = () => {
  return <MyGoals />;
};

export default MyGoalsPage;
