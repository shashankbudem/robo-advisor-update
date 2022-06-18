import React from "react";
import Options from "../Options/Options";

const Financial = (props) => {
  const options = [
    {
      name: "General",
      handler: props.actionProvider.approachInvesting,
      id: 1,
    },
    {
      name: "Retirement",
      handler: props.actionProvider.approachInvesting,
      id: 2,
    },
    {
      name: "Children",
      handler: props.actionProvider.approachInvesting,
      id: 3,
    },
    {
      name: "Vacation",
      handler: props.actionProvider.approachInvesting,
      id: 4,
    },
  ];

  return <Options options={options} />;
};

export default Financial;
