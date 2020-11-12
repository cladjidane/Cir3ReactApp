import Cours from "./Cours";
import Prof from "./Prof";
import React from "react";

const List = ({ type, datas }) => (
  <div className="liste">
    {type === "profs" &&
      datas.map((prof) => <Prof nom={prof.nom} prenom={prof.prenom} />)
    }
    {type === "cours" &&
      datas.map((cour) => <Cours titre={cour.titre} descriptif={cour.descriptif} />)
    }
  </div>
);

export default List;
