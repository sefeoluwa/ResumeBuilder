import { useContext } from 'react'
import DataContext from '../Context'

function Details() {
  const { personalData } = useContext(DataContext)
  return (
    <div>
     <h1>{personalData.fullName}</h1>
     <p>{personalData.email}</p>
     <p>{personalData.number}</p>
     <p>{personalData.address}</p>
     <p>{personalData.title}</p>
    </div>
  )
}

export default Details