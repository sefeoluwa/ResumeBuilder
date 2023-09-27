/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { FaGraduationCap, FaCheck } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'
import { GrAdd } from 'react-icons/gr'
import { useState } from 'react'

const EducationForm = ({ onSaveEducation, onClose }) => {

  const [educationData, setEducationData] = useState({
    degree: '',
    school: '',
    country: '',
    start: '',
    end: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSaveEducation(educationData);
    setEducationData({
    degree: '',
    school: '',
    country: '',
    start: '',
    end: '',
    });
  };

  const handleCancel = () => {
    setEducationData({
      degree: '',
    school: '',
    country: '',
    start: '',
    end: '',
    });
    onClose();
  };

  return(

    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="degree">Degree</label>
        <input 
        type="text" 
        name="degree" 
        id="degree" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        required 
        placeholder='Enter Degree / Field of Study'
        onChange={handleInputChange} 
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="school">School</label>
        <input 
        type="text" 
        name="school" 
        id="school" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='Enter School / University' 
        onChange={handleInputChange} 
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="country">Country</label>
        <input 
        type="country" 
        name="country" 
        id="country" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        autoComplete='country-name' 
        placeholder='Enter Country'
        onChange={handleInputChange} 
        />
    </div>
 
   <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">Start Date</label>
        <input 
        type="date" 
        name="start" 
        id="title" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        onChange={handleInputChange} 
        />
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">End Date</label>
        <input 
        type="date" 
        name="end" 
        id="title" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        onChange={handleInputChange} 
        />
    </div>
   </div>
   <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' onClick={handleSave}><FaCheck /> 
      <p></p>
      </button>
    </div>
    </form>
  )
}

const EducationCard = () => {
 
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [education, setEducation] = useState([]); 

  const handleAddClick = () => {
    setShowEducationForm(true);
  };

  const handleCloseForm = () => {
    setShowEducationForm(false);
  };


  const handleSaveEducation = (newEducation) => {
    setEducation((prevEducation) => [...prevEducation, newEducation]);
    setShowEducationForm(false);
  };


  return (
    <div className=''>
    <div className="flex justify-center">
    <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold' onClick={handleAddClick}> <GrAdd /> Add</button>
    </div>

    {showEducationForm && (
        <EducationForm onSaveEducation={handleSaveEducation} onClose={handleCloseForm} />
      )}

      {/* Display the list of Educations */}
      {education.map((education, index) => (
        <div key={index}>{/* Render each Education here */}</div>
      ))}
    </div>

  )

}

function Education() {
  const [eduCardVisible, setEduCardVisible] = useState(false)

  const handleArrowBtnClick = () => {
    setEduCardVisible(!eduCardVisible); 
  };

  return(

    <div className="p-3 bg-secondary mt-4 rounded-[10px] pb-6">
        <button 
        className="flex justify-between pl-2 pt-3 w-full"
        onClick={handleArrowBtnClick}
        >
      <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <FaGraduationCap
        style={{
          height: '30px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Education</h3>
      </div>

      <VscTriangleDown className='' />
    </button>
    {eduCardVisible && <EducationCard /> }
    </div>
  )
}

export default Education