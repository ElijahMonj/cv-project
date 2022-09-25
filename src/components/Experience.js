import React from "react";

const Experience = (props) => {
  const { exps } = props;

  return (
    <ul>
      {exps.map((exp) => {
        return <li key={exp.id}>{exp.text}</li>;
      })}
    </ul>
  );
};

export default Experience;