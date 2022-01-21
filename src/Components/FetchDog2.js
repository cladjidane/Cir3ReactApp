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
  }, [loadDog])

  const handleLoad = () => {
    setLoadDog(true)
  }

  return (
    <div>
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
