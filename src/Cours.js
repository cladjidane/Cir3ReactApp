import React from "react";

const Cours = ({ titre, descriptif }) => (
  <div className="cours">
    <h3>{titre}</h3>
    <div>{descriptif}</div>
  </div>
);

export default Cours;
