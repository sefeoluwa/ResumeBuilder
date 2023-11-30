/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { GiSkills } from 'react-icons/gi' 
import { VscTriangleDown } from 'react-icons/vsc'
import { FaDeleteLeft } from "react-icons/fa6";
import { GrAdd  } from 'react-icons/gr'
import { FaCheck } from 'react-icons/fa'
import { useState, useContext, useEffect } from 'react'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import DataContext from '../Context'

const SkillForm = ({ onSaveSkill, onClose }) => {

  const { skillData, handleSkillChange} = useContext(DataContext)

  const skillsCollectionRef = collection(db, 'skills'); 

  const handleSave = async () => {
    onSaveSkill(skillData)
    onClose();

    try {
      const user = auth.currentUser;
      if (user) {
        const querySnapshot = await getDocs(skillsCollectionRef)
        let existingSkillId = null;
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId === user.uid) {
            existingSkillId = doc.id
          }
        });

        if (existingSkillId) {
          await updateDoc(doc(skillsCollectionRef, existingSkillId), {
            skill: skillData.skill,
            subSkill: skillData.subSkill,
          });
        } else {
          await addDoc(skillsCollectionRef, {
            userId: user.uid,
            skill: skillData.skill,
            subSkill: skillData.subSkill,
          });
        }
      }
    } catch (error) {
      console.error('Error saving skills data: ', error);
    }
  }


  const handleCancel = () => {
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create Skill</h3>
    <div className="mt-4">
    <form action="" onSubmit={(e) => {
  e.preventDefault(); 
  handleSave(skillData); 
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

// Render skill tags and make them deleteable from db
const SkillsData = () => {
  const [skills, setSkills] = useState([]);
  const skillsCollectionRef = collection(db, 'skills'); 
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(skillsCollectionRef);
        const skillsData = [];
        querySnapshot.forEach((doc) => {
         const data = doc.data();
         const user = auth.currentUser;
          if (data.userId === user.uid) {
            skillsData.push({ ...data, id: doc.id });
          }
        });
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching skills data: ', error);
      }
    }
    fetchSkills()
  })

  const deleteData = async (id) => {
    try {
      const dataDoc = doc(db, 'skills', id);
      await deleteDoc(dataDoc);
    } catch (error) {
      console.error('Error deleting skills data: ', error);
    }
  }

  return (
    <div className="flex gap-5 flex-col p-5">
      {skills.map((skill, index) => (
        <div key={`${skill.skill}-${index}`} className="bg-primary rounded-[10px] p-2.5 flex justify-between">
          <h2 >{skill.skill}</h2>
          <button className=' flex justify-center items-center' onClick={() => {deleteData(skill.id)}}>
            <FaDeleteLeft 
              style={{
              height: '25px',
              width: '25px'
            }}/>
          </button>
        </div>
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

   {skillsCardVisible && 
   <div className="">
    <SkillsData />
    <SkillsCard />
   </div>
   }
    </div>
   
  )
}

export default Skills