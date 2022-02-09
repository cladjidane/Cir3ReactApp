import React from 'react'

const FetchDog2 = () => {
  const [loadDog, setLoadDog] = React.useState(false)
  const [dog, setDog] = React.useState()

  React.useEffect(() => {
    if (loadDog) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((res) => setDog(res))
    }
  }, [loadDog]) // <- tableau de dépendance, ici on passe la variable d'état loaddog

  const handleLoad = () => {
    setLoadDog(true)
  }

  return (
    <div class='fetch-example'>
      <div class='fetch-example-desc'>
        <h3>Appel API mode 2</h3>
        <p>Chargement de l'image par API au click sur le bouton grâce à une combinaison d'un useEffect (qui se déclenche lors de la modification de la variable d'état passé en dépendance - voir commentaire dans le code) et d'un useState (variable d'état)</p>
      </div>
      {dog && (
        <div>
          <img src={dog.message} />
        </div>
      )}
      <button onClick={() => handleLoad()}>Lancer un appel API</button>
    </div>
  )
}

export default FetchDog2
