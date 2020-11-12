import React from "react";

const Prof = ({ nom, prenom, cours }) => {
  //PROF
  const [prof, setProf] = React.useState(nom + " " + prenom);
  const [edit, setEdit] = React.useState(false);

  const handleClick = () => {
    setEdit(true);
  };

  const handleChange = (value) => {
    setProf(value);
  };

  const handleSubmit = () => {
    setEdit(!edit);
  };

  return (
    <div className="prof">
      {edit && 
        <div className="noticeEdit">
          Nous modifions actuellement : {prof}
        </div> 
      }
      <h3>
        {edit ? (
          <div>
            <input
              type="text"
              value={prof}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>OK</button>
          </div>
        ) : (
          <p>
            {prof} <a onClick={() => handleClick()}>Modifier</a>
          </p>
        )}
      </h3>
      <ul>
        {cours &&
          cours.map((cour) => {
            return (
              <li>
                <h4>{cour.titre}</h4>
                {cour.descriptif}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Prof;
