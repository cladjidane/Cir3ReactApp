import Profs from "./Profs";
import React from "react";

const profs = [
  {
    nom: "Vignaud",
    prenom: "Christophe",
    cours: [{ titre: "Symfony TP", descriptif: "lorem ipsum" }],
  },
  {
    nom: "Canu",
    prenom: "Fabien",
    cours: [
      { titre: "Symfony TP", descriptif: "lorem ipsum" },
      { titre: "React TP", descriptif: "lorem ipsum" },
      { titre: "JSX", descriptif: "lorem ipsum" },
    ],
  },
  {
    nom: "King",
    prenom: "Stephen",
    cours: [{ titre: "JSX", descriptif: "lorem ipsum" }],
  },
];

const Content = () => (
  <main className="content">
    <h1>Liste des profs</h1>
    <Profs datas={profs} />
  </main>
);
export default Content;
