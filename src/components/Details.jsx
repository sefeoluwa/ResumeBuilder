import { useContext } from 'react'
import DataContext from '../Context'

function Details() {
  const { personalData, socialData } = useContext(DataContext)
  return (
    <>
    <div>
     <h1>{personalData.fullName}</h1>
     <p>{personalData.email}</p>
     <p>{personalData.number}</p>
     <p>{personalData.address}</p>
     <p>{personalData.title}</p>
    </div>
    <div className="flex justify-between">
  <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href={socialData.github} target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href={socialData.twitter} target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
  <a href={socialData.website} target="_blank" rel="noopener noreferrer">
    Website
  </a>
</div>

    </>
  )
}

export default Details