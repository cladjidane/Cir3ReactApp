import React from 'react'

const FetchDog3 = () => {
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
    setLoadDog(true) // on modifie la variable d'état local loadDog, l'effet ligne 7 à 13 se déclenche
  }

  const handleReload = () => {
    // Il suffit ici de mettre à jour la variable d'état loadDog pour que l'effet lignes 7 à 13 se declenche et refasse un appel API
    setLoadDog(Math.random()) // la valeur importe peu, la variable a juste changée c'est ce que nous voulont pour redéclencher l'effet
  }

  return (
    <div class='fetch-example'>
      <div class='fetch-example-desc'>
        <h3>Appel API mode 3</h3>
        <p>
          Chargement de l'image par API au click sur le bouton grâce à une
          combinaison d'un useEffect (qui se déclenche lors de la modification
          de la variable d'état passé en dépendance - voir commentaire dans le
          code) et d'un useState (variable d'état)
        </p>
        <p>
          Ajout d'un gestionnaire complémentaire pour mettre à jour l'image en
          ajoutant simplement un petit mecanisme de reload
        </p>
      </div>
      {dog ? (
        <div>
          <img src={dog.message} />
          <button onClick={() => handleReload()}>Relancer</button>
        </div>
      ) : (
        <button onClick={() => handleLoad()}>Lancer un appel API</button>
      )}
    </div>
  )
}

export default FetchDog3
