import React from 'react'

const FetchDog1 = () => {
  const [dog, setDog] = React.useState()

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((res) => setDog(res))
  }, [])

  return (
    <div class='fetch-example'>
      <div class='fetch-example-desc'>
        <h3>Appel API mode 1</h3>
        <p>Chargement de l'image par API au montage du composant (affichage) </p>
      </div>
      {dog && (
        <div>
          <img src={dog.message} />
        </div>
      )}
    </div>
  )
}

export default FetchDog1
