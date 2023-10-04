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

    // Skills section.....................................................
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

  // Eduction Section ...................................................
  const [educationData, setEducationData] = useState({
    degree: '',
    school: '',
    country: '',
    start: '',
    end: '',
  });

  const [education, setEducation] = useState([]); 
  const [showEducationForm, setShowEducationForm] = useState(false);
 

  const handleSaveEducation = (newEducation) => {
    setEducation((prevEducation) => [...prevEducation, newEducation]);
    setShowEducationForm(false);
  };

  const handleEduChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Experience section ...................................................

  const [experienceData, setExperienceData] = useState({
    role: '',
    company: '',
    start: '',
    end: '',
    description: '',
  });


  const handleExpChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [experience, setExperience] = useState([]); 
  const [showExperienceForm, setShowExperienceForm] = useState(false);


  const handleSaveExperience = (newExperience) => {
    setExperience((prevExperiences) => [...prevExperiences, newExperience]);
    setShowExperienceForm(false);
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
            education,
            setEducation,
            showEducationForm,
            setShowEducationForm,
            handleSaveEducation,
            educationData,
            setEducationData,
            handleEduChange,
            experienceData,
            setExperienceData,
            experience,
            setExperience,
            handleExpChange,
            handleSaveExperience,
            setShowExperienceForm,
            showExperienceForm,
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext