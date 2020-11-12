import React from "react";

const FetchDog = ({ text }) => {
  const [hasError, setErrors] = React.useState(false);
  const [dog, setDog] = React.useState({});

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setDog(res))
      .catch((err) => setErrors(err));
  }, []);

  return (
    <div>
      <p>DOGS !<span>{JSON.stringify(dog)}</span></p>
      <img src={dog.message} />
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default FetchDog;
