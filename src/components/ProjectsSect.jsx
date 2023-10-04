import { useContext } from 'react'
import DataContext from '../Context'

const ProjectsSect = () => {
  const { projects } = useContext(DataContext)
  return (
    <div>
      {projects.map((project, index) => (
        <div className="" key={`${project.projectName}-${index}`}>
          <h3>{project.projectName}</h3>
          <p>{project.start}</p>
          <p>{project.end}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectsSect