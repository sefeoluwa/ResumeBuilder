import { useContext } from "react"
import DataContext from "../Context"

const EduSect = () => {
  const { education } = useContext(DataContext); 
  return (
    <div>
      {education.map((edu, index) => (
          <div className="" key={`${edu.education}-${index}`}>
            <h2>{edu.degree}</h2>
            <p>{edu.school}</p>
            <p>{edu.country}</p>
            <div className="">
              <p>{edu.start}</p>
              <p>{edu.end}</p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default EduSect
