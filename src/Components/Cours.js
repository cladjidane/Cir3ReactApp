import React from "react";

const Cours = ({ titre, descriptif }) => {
  const [cours, setCours] = React.useState({ titre, descriptif });
  const [edit, setEdit] = React.useState(false);

  const handleClick = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
    setCours({ ...cours, [name]: value });
  };

  const handleSubmit = () => {
    setEdit(!edit);
  };

  return (
    <li className="cours">
      {edit && (
        <div className="noticeEdit">
          Nous modifions actuellement : {cours.titre}
          <br />
          {cours.descriptif}
        </div>
      )}
      {edit ? (
        <div>
          <p>
            <label>Titre</label>
            <br />
            <input
              type="text"
              name="titre"
              value={cours.titre}
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Descriptif</label>
            <br />
            <textarea name="descriptif" onChange={(e) => handleChange(e)}>
              {cours.descriptif}
            </textarea>
          </p>
          <button onClick={() => handleSubmit()}>OK</button>
        </div>
      ) : (
        <div>
          <h3>
            {cours.titre} <a onClick={() => handleClick()}>Modifier</a>
          </h3>
          <div>{cours.descriptif}</div>
        </div>
      )}
    </li>
  );
};

export default Cours;
