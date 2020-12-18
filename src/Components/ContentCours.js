import Cours from "./Cours";
import React from "react";

const ContentCours = ({datas}) => {
  const cours = []
  return (
    <main className="content">
      <h1>Liste des cours</h1>
      {cours && cours.map((cour) => <Cours titre={cour.titre} descriptif={cour.descriptif} />)}
    </main>
  )
}
export default ContentCours;
