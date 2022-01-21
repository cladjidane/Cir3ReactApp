import React from "react";

const FetchDog3 = () => {
  const [loadDog, setLoadDog] = React.useState(false);
  const [dog, setDog] = React.useState();

  React.useEffect(() => {
    if (loadDog) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((res) => setDog(res));
    }
  }, [loadDog]);

  const handleLoad = () => {
    setLoadDog(true);
  };

  const handleReload = () => {
    setLoadDog(Math.random());
  };

  return (
    <div>
      {dog ? (
        <div>
          <img src={dog.message} />
          <button onClick={() => handleReload()}>Relancer</button>
        </div>
      ) : (
        <button onClick={() => handleLoad()}>Lancer un appel API</button>
      )}
    </div>
  );
};

export default FetchDog3;
