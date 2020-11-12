import List from "./List";
import React from "react";

const cours = [
  { titre: "Symfony TP", descriptif: "..." },
  { titre: "React TP", descriptif: "..." },
  { titre: "JSX", descriptif: "..." }
];

const profs = [
  { nom: "Vignaud", prenom: "Christophe" },
  { nom: "Canu", prenom: "Fabien" },
  { nom: "King", prenom: "Stephen" },
];

const Content = () => (
  <main className="content">
    <h1>Liste des profs</h1>
    <List datas={profs} type="profs" />
    <List datas={cours} type="cours" />
  </main>
);
export default Content;
