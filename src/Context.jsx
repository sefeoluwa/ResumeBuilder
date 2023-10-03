/* eslint-disable react/prop-types */
import { createContext, useState } from "react"


const DataContext = createContext()

export const DataProvider = ({ children }) => {
// personal details
    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        number: '',
        address: '',
        title: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        
      };


// Social links
      const [socialData, setSocialData] = useState({
        linkedin: '',
        github: '',
        twitter: '',
        website: '',
    })
    
    const handleLinkChange = (e) => {
      const { name, value } = e.target;
      setSocialData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      
    };

    // Skills section
    const [skillData, setSkillData] = useState({
        skill: '',
        subSkill: '',
      });
    
      const handleSkillChange = (e) => {
        const { name, value } = e.target;
        setSkillData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const [skills, setSkills] = useState([]); 
      const [showSkillForm, setShowSkillForm] = useState(false);

  const handleSaveSkill = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
    setShowSkillForm(false);
  };

    return(
        <DataContext.Provider value={{ 
            personalData, 
            setPersonalData, 
            handleInputChange, 
            socialData,
            setSocialData,
            handleLinkChange,
            handleSkillChange,
            skillData,
            setSkillData,
            skills,
            setSkills,
            handleSaveSkill,
            showSkillForm,
            setShowSkillForm,
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext