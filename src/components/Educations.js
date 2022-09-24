import React from "react";

const Educations = (props) => {
  const { edus } = props;

  return (
    <ul>
      {edus.map((edu) => {
        return <li key={edu.id} className='eduID'>{edu.text}</li>;
      })}
    </ul>
  );
};

export default Educations;