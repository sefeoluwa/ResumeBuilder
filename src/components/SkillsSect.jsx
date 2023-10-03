import { useContext } from "react"
import DataContext from "../Context"

const SkillsSect = () => {
  const { skills } = useContext(DataContext); 
  return (
    <div>
      {skills.map((skill) => (
        <div className="" key={skill.name}>
          <h2>{skill.skill}</h2>
          <p>{skill.subSkill}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillsSect
