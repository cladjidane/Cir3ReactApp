import React from "react";
import Cours from "./Cours";
import Prof from "./Prof";

const Liste = ({ type, datas }) => (
  <div className="liste">
    {type === "profs" &&
      datas.map((prof) => <Prof nom={prof.nom} prenom={prof.prenom} />)
    }
    {type === "cours" &&
      datas.map((cour) => <Cours titre={cour.titre} descriptif={cour.descriptif} />)
    }
  </div>
);

export default Liste;
