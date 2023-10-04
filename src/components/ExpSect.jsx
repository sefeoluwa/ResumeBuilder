import { useContext } from 'react'
import DataContext from '../Context'

const ExpSect = () => {
  const { experience } = useContext(DataContext)

  return (
    <div>
      {experience.map((exp, index) => (
        <div className="" key={`${exp.exp}-${index}`}>
          <h3>{exp.role}</h3>
          <p>{exp.company}</p>
          <p>{exp.start}</p>
          <p>{exp.end}</p>
          <p>{exp.description}</p>

        </div>
      ))}
    </div>
  )
}

export default ExpSect