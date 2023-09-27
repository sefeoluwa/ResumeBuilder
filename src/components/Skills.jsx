/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { GiSkills } from 'react-icons/gi' 
import { VscTriangleDown } from 'react-icons/vsc'
import { GrAdd  } from 'react-icons/gr'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'

const SkillForm = ({ onSaveSkill, onClose }) => {
  const [skillData, setSkillData] = useState({
    skill: '',
    subSkill: '',
    skillLevel: 'select',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Call the onSaveSkill function and pass the skillData
    onSaveSkill(skillData);
    // Reset the form or close the SkillForm as needed
    setSkillData({
      skill: '',
      subSkill: '',
      skillLevel: 'select',
    });
  };

  const handleCancel = () => {
    // Reset the form
    setSkillData({
      skill: '',
      subSkill: '',
      skillLevel: 'select', // Reset the skill level to the default value
    });
    // Close the form
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create Skill</h3>
    <div className="mt-4">
    <form action="">
       <div className="flex flex-col gap-2">
      <label htmlFor="skill">Skill 
      <span className='text-[red] ml-1'>*</span>
      </label>
      <input
              type="text"
              id="skill"
              aria-label="skill"
              name="skill"
              required
              placeholder="Enter skill"
              className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]'
              value={skillData.skill}
              onChange={handleInputChange} // Bind the input change handler
            />
          </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="subSkill">Information / Sub-skills 
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='subSkill' 
      aria-label='subSkill' 
      name='subSkill' 
      required 
      placeholder='Enter more information or sub-skills' 
      value={skillData.subSkill}
      onChange={handleInputChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] pt-2' 
      />
      </div>
    

<div className="flex flex-col gap-2 mt-4">
<label htmlFor="skillLevel">Select skill Level</label>
        <select name='skillLevel' 
        id='skillLevel' 
        required 
        value={skillData.skillLevel}
        onChange={handleInputChange}
        className='outline-none p-[10px] rounded-[10px] border-none cursor-pointer'
        >
        <option value="select" className='select'>Skill level</option>
        <option value="novice">Novice</option>
        <option value="beginner">Beginner</option>
        <option value="skillful">Skillful</option>
        <option value="experienced">Experienced</option>
        <option value="expert">Expert</option>
        </select>
</div>
    </form>
    </div>
    <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' onClick={handleSave}><FaCheck /> 
      <p></p>
      </button>
    </div>
   </div>
  )
}

const SkillsCard = () => {
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [skills, setSkills] = useState([]); // Array to store skills

  const handleAddClick = () => {
    setShowSkillForm(true);
  };

  const handleCloseForm = () => {
    setShowSkillForm(false);
  };


  const handleSaveSkill = (newSkill) => {
    // Update the skills array with the new skill data
    setSkills((prevSkills) => [...prevSkills, newSkill]);
    // Hide the SkillForm
    setShowSkillForm(false);
  };


  return(
    <div className=''>
   <div className="flex justify-center">
   <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold' onClick={handleAddClick}> <GrAdd /> Add</button>
   </div>
  
   {showSkillForm && (
       <SkillForm onSaveSkill={handleSaveSkill} onClose={handleCloseForm} />
     )}

     {/* Display the list of skills */}
     {skills.map((skill, index) => (
       <div key={index}>{/* Render each skill here */}</div>
     ))}
   </div>
  )
}

const Skills = () => {
  const [skillsCardVisible, setSkillsCardVisible] = useState(false)

  const handleArrowBtnClick = () => {
    setSkillsCardVisible(!skillsCardVisible);
  }


  return (
    <div className="p-3 bg-secondary mt-4 rounded-[10px] pb-6">
       <button 
       className="flex justify-between pl-2 pt-3 w-full"
       onClick={handleArrowBtnClick}
       >
     <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
       <GiSkills
       style={{
         height: '30px',
         width: '30px'
       }}
       /> 
       <h3 className='pl-2'>Skills</h3>
     </div>

     <VscTriangleDown className='' />
   </button>

   {skillsCardVisible && <SkillsCard />}
    </div>
   
  )
}

export default Skills