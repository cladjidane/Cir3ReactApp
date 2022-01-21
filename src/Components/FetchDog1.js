import React from 'react'

const FetchDog1 = () => {
  const [dog, setDog] = React.useState()

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((res) => setDog(res))
  }, [])

  return (
    <div>
      {dog && (
        <div>
          <img src={dog.message} />
        </div>
      )}
    </div>
  )
}

export default FetchDog1
