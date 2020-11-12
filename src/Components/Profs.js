import Prof from "./Prof";
import React from "react";

const Profs = ({ datas }) => (
  <div className="liste-profs">
    {datas.map((prof) => (
      <Prof nom={prof.nom} prenom={prof.prenom} cours={prof.cours} />
    ))}
  </div>
);

export default Profs;
