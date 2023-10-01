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

    const [skillData, setSkillData] = useState({
        skill: '',
        subSkill: '',
        skillLevel: 'select',
      });
    
      const handleSkillChange = (e) => {
        const { name, value } = e.target;
        setSkillData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
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
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext