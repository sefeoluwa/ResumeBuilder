/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { VscTriangleDown } from 'react-icons/vsc'
import { FaBriefcase } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';


const ExperienceForm = ({ onSaveExperience, onClose }) => {
  const [experienceData, setExperienceData] = useState({
    experience: '',
    subExperience: '',
    experienceLevel: 'select',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Call the onSaveexperience function and pass the experienceData
    onSaveExperience(experienceData);
    // Reset the form or close the experienceForm as needed
    setExperienceData({
      experience: '',
      subExperience: '',
      experienceLevel: 'select',
    });
  };

  const handleCancel = () => {
    // Reset the form
    setExperienceData({
      experience: '',
      subExperience: '',
      experienceLevel: 'select', // Reset the experience level to the default value
    });
    // Close the form
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create experience</h3>
    <div className="mt-4">
    <form action="">
       <div className="flex flex-col gap-2">
      <label htmlFor="experience">experience 
      <span className='text-[red] ml-1'>*</span>
      </label>
      <input
              type="text"
              id="experience"
              aria-label="experience"
              name="experience"
              required
              placeholder="Enter experience"
              className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]'
              value={experienceData.experience}
              onChange={handleInputChange} // Bind the input change handler
            />
          </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="subexperience">Information / Sub-experiences 
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='subexperience' 
      aria-label='subexperience' 
      name='subexperience' 
      required 
      placeholder='Enter more information or sub-experiences' 
      value={experienceData.subexperience}
      onChange={handleInputChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] pt-2' 
      />
      </div>
    

<div className="flex flex-col gap-2 mt-4">
<label htmlFor="experienceLevel">Select experience Level</label>
        <select name='experienceLevel' 
        id='experienceLevel' 
        required 
        value={experienceData.experienceLevel}
        onChange={handleInputChange}
        className='outline-none p-[10px] rounded-[10px] border-none cursor-pointer'
        >
        <option value="select" className='select'>experience level</option>
        <option value="novice">Novice</option>
        <option value="beginner">Beginner</option>
        <option value="experienceful">experienceful</option>
        <option value="experienced">Experienced</option>
        <option value="expert">Expert</option>
        </select>
</div>
    </form>
    </div>
    <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' onClick={handleSave}><BsCheckLg /> 
      <p></p>
      </button>
    </div>
   </div>
  )
}

function experience() {
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experiences, setExperiences] = useState([]); // Array to store Experiences

  const handleAddClick = () => {
    setShowExperienceForm(true);
  };

  const handleCloseForm = () => {
    setShowExperienceForm(false);
  };


  const handleSaveExperience = (newExperience) => {
    // Update the Experiences array with the new Experience data
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
    // Hide the ExperienceForm
    setShowExperienceForm(false);
  };


  return (
    <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
     <button className="flex justify-between pl-2 pt-3 w-full">
      <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <FaBriefcase
        style={{
          height: '30px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Experiences</h3>
      </div>

      <VscTriangleDown className='' />
    </button>

    <div className="flex justify-center">
    <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold' onClick={handleAddClick}> <GrAdd /> Add</button>
    </div>
   
    {showExperienceForm && (
        <ExperienceForm onSaveExperience={handleSaveExperience} onClose={handleCloseForm} />
      )}

      {/* Display the list of Experiences */}
      {experiences.map((experience, index) => (
        <div key={index}>{/* Render each Experience here */}</div>
      ))}
    </div>
   
  
  )
}

export default experience