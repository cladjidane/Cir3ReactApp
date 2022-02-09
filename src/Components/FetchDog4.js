import React from 'react'

const FetchDog4 = () => {
  const [loadDog, setLoadDog] = React.useState(false)
  const [dog, setDog] = React.useState()

  React.useEffect(() => {
    if (loadDog) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((res) => setDog(res))
    }
  }, [loadDog])

  const handleLoad = () => {
    // Petite simplification par rapport au mode ou l'on combiné les 2 fonctions
    setLoadDog(Math.random())
  }

  return (
    <div class='fetch-example'>
      <div class='fetch-example-desc'>
        <h3>Appel API mode 4</h3>
        <p>
          Idem mode 3 mais simplifé un peu :)
        </p>
      </div>

      {dog && (
        <div>
          <img src={dog.message} />
        </div>
      )}

      <button onClick={() => handleLoad()}>
        {!loadDog ? 'Lancer un appel API' : 'Relancer'}
      </button>
    </div>
  )
}

export default FetchDog4
