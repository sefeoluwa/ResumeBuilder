import { useContext } from "react"
import DataContext from "../Context"

const SkillsSect = () => {
  const { skills } = useContext(DataContext); 
  return (
    <div>
      {skills.map((skill, index) => (
        <div className="" key={`${skill.skill}-${index}`}>
          <h2>{skill.skill}</h2>
          <p>{skill.subSkill}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillsSect
