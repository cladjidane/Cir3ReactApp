import React from "react";
import Prof from "./Prof";

const profs = [
  { nom: "Vignaud", prenom: "Christophe" },
  { nom: "Canu", prenom: "Fabien" },
  { nom: "King", prenom: "Stephen" },
];

const Content = ({ text }) => (
  <div className="content">
    <p>{text}</p>
    {profs.map((prof) => 
      <Prof nom={prof.nom} prenom={prof.prenom} />
    )}
  </div>
);

export default Content;
