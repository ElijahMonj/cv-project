import React from "react";

const Certifications = (props) => {
  const { certs } = props;

  return (
    <ul>
      {certs.map((cert) => {
        return <li key={cert.id} className='certsID'>{cert.text}</li>;
      })}
    </ul>
  );
};

export default Certifications;