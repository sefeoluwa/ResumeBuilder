/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { GiSkills } from 'react-icons/gi' 
import { VscTriangleDown } from 'react-icons/vsc'
import { GrAdd  } from 'react-icons/gr'
import { FaCheck } from 'react-icons/fa'
import { useState, useContext, useEffect } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import DataContext from '../Context'

const SkillForm = ({ onSaveSkill, onClose, isAuth }) => {

  const { skillData, setSkillData, handleSkillChange} = useContext(DataContext)

  const [skillsList, setSkillsList] = useState([]);

  const skillsCollectionRef = collection(db, 'skills'); 

  const handleSave = async () => {
    onSaveSkill(skillData);
    onClose();

    try {
      const user = auth.currentUser; 
      if (user) {
        const docRef = await addDoc(skillsCollectionRef, {
          userId: user.uid,
          skill: skillData.skill,
          subSkill: skillData.subSkill,
        });
        setSkillData({
          skill: '',
          subSkill: '',
        });
      }
    } catch (error) {
      console.error('Error adding skill data: ', error);
    }
  };

  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(skillsCollectionRef);
      const skillsData = [];
      querySnapshot.forEach((doc) => {
        skillsData.push(doc.data());
      });
    };
    fetchSkills();
  }, [skillsCollectionRef]);


  const handleCancel = () => {
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create Skill</h3>
    <div className="mt-4">
    <form action="" onSubmit={(e) => {
  e.preventDefault(); 
  handleSave(); 
}}>
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
              onChange={handleSkillChange} 
            />
          </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="subSkill">Information / Sub-skills 
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='subSkill' 
      aria-label='subSkill' 
      name='subSkill' 
      placeholder='Enter more information or sub-skills' 
      value={skillData.subSkill}
      onChange={handleSkillChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] pt-2' 
      />
      </div>
      <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button type='submit' className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' ><FaCheck /> 
      <p></p>
      </button>
    </div>
    </form>
    </div>
   
   </div>
  )
}

const SkillsCard = () => {

  const {handleSaveSkill, setShowSkillForm, showSkillForm} = useContext(DataContext)


  const handleAddClick = () => {
    setShowSkillForm(true);
  };

  const handleCloseForm = () => {
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