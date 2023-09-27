/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { VscTriangleDown } from 'react-icons/vsc'
import { FaBriefcase, FaCheck } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';



const ExperienceForm = ({ onSaveExperience, onClose }) => {
  const [experienceData, setExperienceData] = useState({
    role: '',
    company: '',
    start: '',
    end: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSaveExperience(experienceData);
    setExperienceData({
      role: '',
      company: '',
      start: '',
      end: '',
      description: '',
    });
    console.log(experienceData)
  };

  const handleCancel = () => {
    setExperienceData({
      role: '',
      company: '',
      start: '',
      end: '',
      description: '',
    });
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create experience</h3>
    <div className="mt-4">
    <form action="">
       <div className="flex flex-col gap-2">
      <label htmlFor="role">Job Title 
      <span className='text-[red] ml-1'>*</span>
      </label>
      <input
              type="text"
              id="role"
              aria-label="role"
              name="role"
              required
              placeholder="Enter job title"
              className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]'
              value={experienceData.role}
              onChange={handleInputChange} 
            />
          </div>

          <div>
          <label htmlFor="company">Company</label>
          <input
              type="text"
              id="company"
              aria-label="company"
              name="company"
              required
              placeholder="Enter company name"
              className='bg-primary outline-none w-full pl-2 rounded-[10px] text-[14px] h-[40px]'
              value={experienceData.company}
              onChange={handleInputChange} 
            />
          </div>

          <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="start">Start Date</label>
        <input 
        type="date" 
        name="start" 
        id="start" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={experienceData.start}
        onChange={handleInputChange} 
        />
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="end">End Date</label>
        <input 
        type="date" 
        name="end" 
        id="end" 
        value={experienceData.end}
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        onChange={handleInputChange} 
        />
    </div>
   </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="description">Description
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='description' 
      aria-label='description' 
      name='description' 
      required 
      placeholder='Describe your role' 
      value={experienceData.description}
      onChange={handleInputChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[100px] pt-2' 
      />
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

const ExperienceSection = () => {
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experiences, setExperiences] = useState([]); 

  const handleAddClick = () => {
    setShowExperienceForm(true);
  };

  const handleCloseForm = () => {
    setShowExperienceForm(false);
  };


  const handleSaveExperience = (newExperience) => {
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
    setShowExperienceForm(false);
  };


  return (
    <div className=''>
    <div className="flex justify-center">
    <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold' onClick={handleAddClick}> <GrAdd /> Add</button>
    </div>
   
    {showExperienceForm && (
        <ExperienceForm onSaveExperience={handleSaveExperience} onClose={handleCloseForm} />
      )}

      
      {experiences.map((experience, index) => (
        <div key={index}>{/* Render each Experience here */}</div>
      ))}
    </div>
   
  
  )
}

function Experience() {
  const [expCardVisible, setExpCardVisible] = useState(false);

  const handleArrowBtnClick = () => {
    setExpCardVisible(!expCardVisible); 
  };

  return (
    <div className="p-3 bg-secondary mt-4 rounded-[10px] pb-6">
      <button
        className="flex justify-between pl-2 pt-3 w-full"
        onClick={handleArrowBtnClick}
      >
        <div className="flex font-bold text-[18px] mt-[-4px] pb-2">
          <FaBriefcase
            style={{
              height: '30px',
              width: '30px',
            }}
          />
          <h3 className="pl-2">Experiences</h3>
        </div>

        <VscTriangleDown className="" />
      </button>

      {expCardVisible && <ExperienceSection />} 
    </div>
  );
}

export default Experience