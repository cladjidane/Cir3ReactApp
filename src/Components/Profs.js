import Prof from './Prof'
import React from 'react'

const Profs = () => {

  const [loadDatas, setLoadDatas] = React.useState(null)

  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((res) => res.json())
      .then((res) => setLoadDatas(res.results))
  }, [])

  return (
    <div className='liste-profs'>
      {loadDatas && loadDatas.map((prof) => (
        <Prof nom={prof.name.first} prenom={prof.name.first} email={prof.email} />
      ))}
    </div>
  )
}

export default Profs
