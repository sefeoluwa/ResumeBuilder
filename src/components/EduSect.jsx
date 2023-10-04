import { useContext } from "react"
import DataContext from "../Context"

const EduSect = () => {
  const { education } = useContext(DataContext); 
  return (
    <div>
      {education.map((edu) => {
        return (
          <div className="" key={edu.degree}>
            <h2>{edu.degree}</h2>
            <p>{edu.school}</p>
          </div>
        );
      })}
    </div>
  )
}

export default EduSect
