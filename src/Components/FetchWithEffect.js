import React from "react";

const FetchWithEffect = ({ text }) => {
  const [dog, setDog] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setDog(res));
    }, 5000);
  }, []);

  return (
    <div>
      {dog && <img src={dog.message} />}
    </div>
  );
};

export default FetchWithEffect;
