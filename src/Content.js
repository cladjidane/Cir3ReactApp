import React from "react";
import Liste from "./Liste";

const profs = [
  { nom: "Vignaud", prenom: "Christophe" },
  { nom: "Canu", prenom: "Fabien" },
  { nom: "King", prenom: "Stephen" },
];

const cours = [
  { titre: "Symfony TP", descriptif: "..." },
  { titre: "React TP", descriptif: "..." },
  { titre: "JSX", descriptif: "..." }
];

const Content = ({ text }) => (
  <div className="content">
    <p>{text}</p>
    <Liste datas={profs} type="profs" />
    <Liste datas={cours} type="cours" />
  </div>
);

export default Content;
