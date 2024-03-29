import React from "react";

const Prof = ({ infosProf }) => {
  const [prof, setProf] = React.useState(infosProf);
  const [edit, setEdit] = React.useState(false);

  // Events
  const handleClick = () => setEdit(true);
  const handleChange = (e) => setProf({ ...prof, [e.target.name]: e.target.value.trim() });
  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(prof),
    };

    fetch(`http://localhost:3001/profs/${prof.id}`, requestOptions);
    // Pour le traitement de retour
    //  .then(response => response.json())
    //  .then(result => console.log(result))
    //  .catch(error => console.log('error', error));

    setEdit(false);
  };

  return (
    <div className="prof">
      {edit ? (
        <>
          <div>
            Nom : <input name="nom" type="text" onChange={handleChange} defaultValue={prof.title} />
            <br />
            Prénom : <input name="prenom" type="text" onChange={handleChange} defaultValue={prof.first} />
            <br />
            <button onClick={() => handleSubmit()}>OK</button>
          </div>
        </>
      ) : (
        <div>
          Nom : {prof.title}
          <br />
          Prénom : {prof.first}
          <br />
          <button onClick={() => handleClick()}>Modifier</button>
        </div>
      )}{" "}
      <hr />
    </div>
  );
};

export default Prof;
