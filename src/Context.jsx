/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


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

  // Education Section ...................................................
  const [educationData, setEducationData] = useState({
    degree: '',
    school: '',
    country: '',
    start: '',
    end: '',
    description: null,
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

  // Projects section
  const [projectsData, setProjectsData] = useState({
    projectName: '',
    start: '',
    end: '',
    description: '',
  });

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showProjectsForm, setShowProjectsForm] = useState(false);
  const [projects, setProjects] = useState([]); 

  const handleSaveProjects = (newProjects) => {
    setProjects((prevProjects) => [...prevProjects, newProjects]);
    setShowProjectsForm(false);
  };


  // download button action
  const generatePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
  
    // Create an HTML element to contain the content you want to convert to a PDF.
    const container = document.getElementById('resume');
  
    // Use html2canvas to capture the content as an image.
    html2canvas(container, { dpi: 300 }).then((canvas) => {
      // Add the captured image to the PDF.
      const imgData = canvas.toDataURL('image/png', 1.0);
      doc.addImage(imgData, 'JPEG', 10, 10, 190, 250);
  
      // Save or download the PDF.
      doc.save('My Resume.pdf');
    });
  };

    return(
        <DataContext.Provider value={{ 
            generatePDF,
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
            projects,
            setProjects,
            projectsData,
            setProjectsData,
            handleSaveProjects,
            showProjectsForm,
            setShowProjectsForm,
            handleProjectChange,
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext