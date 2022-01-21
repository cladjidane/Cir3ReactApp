import ProfFetch from './ProfFetch'
import React from 'react'

const ContentProfs = () => {

  const [loadDatas, setLoadDatas] = React.useState(null)

  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((res) => res.json())
      .then((res) => setLoadDatas(res.results))
  }, [])

  return (
    <div className='liste-profs'>
      {loadDatas && loadDatas.map((prof) => (
        <ProfFetch infosProf={prof.name} />
      ))}
    </div>
  )
}

export default ContentProfs
