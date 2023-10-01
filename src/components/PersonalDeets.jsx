/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VscTriangleDown } from 'react-icons/vsc'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaLink, FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import DataContext from '../Context'
import { useContext } from 'react'

const PersonalCard = ({ onClose, onSavePersonalData }) => {

const { personalData, setPersonalData } = useContext(DataContext);
const { handleInputChange } = useContext(DataContext);

const handleSave = () => {
  onSavePersonalData(personalData);
  setPersonalData({
    fullName: '',
    email: '',
    number: '',
    address: '',
    title: '',
  });
  onClose()
};

const handleCancel = () => {
  setPersonalData({
    fullName: '',
    email: '',
    number: '',
    address: '',
    title: '',
  });
  onClose();
};

  return(
    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Full Name</label>
        <input 
        type="text" 
        name="fullName" 
        id="name" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='John Doe' 
        required
        onChange={handleInputChange}
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="email">Email <span className='text-[11px] text-gray-500 font-bold' >recommended</span> </label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='johndoe@gmail.com' 
        onChange={handleInputChange}
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="number">Phone Number <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input 
        type="tel" 
        name="number" 
        id="number" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='Phone' 
        onChange={handleInputChange}
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="address">Address <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input 
        type="text" 
        name="address" 
        id="address" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='Lagos, Nigeria' 
        onChange={handleInputChange}
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="title">Job Title <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input 
        type="text" 
        name="title" 
        id="title" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='Frontend Engineer'
        onChange={handleInputChange}
        />
    </div>
    <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} type='button' >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' type='button' onClick={handleSave}><FaCheck /> 
      <p></p>
      </button>
      </div>
    </form>   
  )
}

const Personal = () => {
  const [persCardVisible, setPersCardVisible] = useState(false)

  const handleArrowBtnClick = () => {
    setPersCardVisible(true)
  }

  const [showPersonalForm, setShowPersonalForm] = useState(false);
  const [personal, setPersonal] = useState([]);

  const handleCloseForm = () => {
    setPersCardVisible(false);
  };


  const handleSavePersonal = (newPersonal) => {
    setPersonal((prevPersonal) => [...prevPersonal, newPersonal]);
    setShowPersonalForm(false);
  };

  return(
    <div className='p-3 pb-6 bg-secondary mt-4 rounded-[10px]'>
      <button 
      className='font-bold text-[20px] pl-2 pt-3 flex justify-between w-full'
      onClick={handleArrowBtnClick}
      >
        <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <BsPersonBoundingBox
        style={{
          height: '28px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Personal Details</h3>
      </div>
      <VscTriangleDown className='' />
     </button>

    {persCardVisible && ( <PersonalCard onClose={handleCloseForm} onSavePersonalData={handleSavePersonal}  />)}
    </div>
  )
}

// Links Section.................................

const SocialsCard = ({ onClose, onSaveSocialData }) => {
  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+([/?#].*)?)?$/;

  const [socialData, setSocialData] = useState({
    linkedin: '',
    github: '',
    twitter: '',
    website: '',
})

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSocialData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  
};

const validateUrl = (name, value) => {
  const isValid = urlRegex.test(value);
  setInputErrors((prevErrors) => ({
    ...prevErrors,
    [name]: isValid ? '' : 'Invalid URL',
  }));
};

const handleBlur = (e) => {
  const { name, value } = e.target;
  validateUrl(name, value);
};

const [inputErrors, setInputErrors] = useState({
  linkedin: '',
  github: '',
  twitter: '',
  website: '',
});

const handleSave = () => {
  // Check if there are any input errors
  if (Object.values(inputErrors).every((error) => error === '')) {
    onSaveSocialData(socialData);
    setSocialData({
      linkedin: '',
      github: '',
      twitter: '',
      website: '',
    });
    onClose();
  }
};

const handleCancel = () => {
  setSocialData({
    linkedin: '',
    github: '',
    twitter: '',
    website: '',
  });
  onClose();
};


  return(
    <form action="" className='mt-4 pl-2'>
<div className="flex flex-col gap-2">
  <label htmlFor="linkedin">LinkedIn <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
  <input
          type="url"
          name="linkedin"
          id="linkedin"
          className={`bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] ${
            inputErrors.linkedin ? 'border-red-500' : ''
          }`}
          placeholder="https://www.linkedin.com/in/johndoe/"
          value={socialData.linkedin}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {inputErrors.linkedin && (
          <span className="text-red-500">{inputErrors.linkedin}</span>
        )}
      </div>

{/* GitHub */}
<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="github">GitHub</label>
  <input
    type="url"
    name="github"
    id="github"
    className={`bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] ${
      inputErrors.github ? 'border-red-500' : ''
    }`}
    placeholder="https://www.github.com/johndoe/"
    value={socialData.github}
    onChange={handleInputChange}
    onBlur={handleBlur}
  />
  {inputErrors.github && (
    <span className="text-red-500">{inputErrors.github}</span>
  )}
</div>

{/* Twitter */}
<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="twitter">Twitter</label>
  <input
    type="url"
    name="twitter"
    id="twitter"
    className={`bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] ${
      inputErrors.twitter ? 'border-red-500' : ''
    }`}
    placeholder="https://www.twitter.com/johndoe/"
    value={socialData.twitter}
    onChange={handleInputChange}
    onBlur={handleBlur}
  />
  {inputErrors.twitter && (
    <span className="text-red-500">{inputErrors.twitter}</span>
  )}
</div>

{/* Website */}
<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="website">Website</label>
  <input
    type="url"
    name="website"
    id="website"
    className={`bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] ${
      inputErrors.website ? 'border-red-500' : ''
    }`}
    placeholder="https://www.johndoe.com"
    value={socialData.website}
    onChange={handleInputChange}
    onBlur={handleBlur}
  />
  {inputErrors.website && (
    <span className="text-red-500">{inputErrors.website}</span>
  )}
</div>

<div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} type='button' >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' type='button' onClick={handleSave}><FaCheck /> 
      <p></p>
      </button>
      </div>
</form>
  )
}

const Socials = () => {
  const [socialCardVisible, setSocialCardVisible] = useState(false)

  const handleArrowBtnClick = () => {
    setSocialCardVisible(!socialCardVisible)
  }

  const [showSocialForm, setShowSocialForm] = useState(false);
  const [social, setSocial] = useState([]);

  const handleCloseForm = () => {
    setSocialCardVisible(false);
  };


  const handleSaveSocial = (newSocial) => {
    setSocial((prevSocial) => [...prevSocial, newSocial]);
    setShowSocialForm(false);
  };
 
  return(
    <div className="p-3 pb-6 bg-secondary mt-4 rounded-[10px]">
      <button 
      className='w-full font-bold text-[18px] pl-2 mt-3 flex justify-between'
      onClick={handleArrowBtnClick}
      >
       <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <FaLink
        style={{
          height: '25px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Links</h3>
      </div>
      <VscTriangleDown className='' />
      </button>

      {socialCardVisible && <SocialsCard onClose={handleCloseForm} onSaveSocialData={handleSaveSocial} />}

    </div>
  )
}

function personalDeets() {
  return (
    <>
    <Personal />
    <Socials />
    </>
  )
}

export default personalDeets