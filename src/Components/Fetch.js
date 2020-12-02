import React from "react";

const Fetch = ({ text }) => {
  const [dog, setDog] = React.useState();

  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => setDog(res));
  }, 5000);

  return (
    <div>
      {dog && <img src={dog.message} />}
    </div>
  );
};

export default Fetch;
