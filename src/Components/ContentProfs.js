import Prof from "./Prof";
import React from "react";

const ContentProfs = () => {
  const [profs, setDatas] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3001/profs")
      .then(response => response.json())
      .then(result => setDatas(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <main className="content">
      <h1>Liste des profs</h1>
      <div className="liste-profs">
        {profs.map((prof, i) => (
          <div>
            <Prof key={`k-${i}`} infosProf={prof} />
            <hr />
          </div>
        ))}
      </div>
    </main>
  )
}
export default ContentProfs;
