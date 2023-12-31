/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { VscTriangleDown } from 'react-icons/vsc'
import { FaBriefcase, FaCheck } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr';
import { FaDeleteLeft } from "react-icons/fa6";
import { useState, useContext, useEffect } from 'react'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import DataContext from '../Context';


const ExperienceForm = ({ onSaveExperience, onClose }) => {
  const { experienceData, handleExpChange } = useContext(DataContext)
  const expCollectionRef = collection(db, 'experience')

  const handleSave = async () => {
    onSaveExperience(experienceData);
    onClose();

    try {
      const user = auth.currentUser; 
      if (user) {
        const querySnapshot = await getDocs(expCollectionRef);
          const expData = [];
          querySnapshot.forEach((doc) => {
          const data = doc.data();
         if (data.userId === user.uid) {
            expData.push(data);
         }
          });
        
          // check for existing user data
        const existingExuData = expData.find((data) => data.userId === user.uid)
        if (existingExuData) {
          // update neew data
          await updateDoc(doc(expCollectionRef, existingExuData.docId), {
            userId: user.uid,
            role: experienceData.role,
            company: experienceData.company,
            start: experienceData.start,
            end: experienceData.end,
            description: experienceData.description,
          })
        } else {
          await addDoc(expCollectionRef, {
            userId: user.uid,
            role: experienceData.role,
            company: experienceData.company,
            start: experienceData.start,
            end: experienceData.end,
            description: experienceData.description,
  
          })
        }
      }
    } catch (error) {
      console.error('Error adding experience data: ', error);
    }
  };

  useEffect(() => {
    const fetchExp = async () => {
      const querySnapshot = await getDocs(expCollectionRef);
      const experienceData = [];
      querySnapshot.forEach((doc) => {
        experienceData.push(doc.data());
      });
    };
    fetchExp();
  }, [expCollectionRef]);



  const handleCancel = () => {
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create experience</h3>
    <div className="mt-4">
    <form action="" onSubmit={(e) => {
      e.preventDefault(); 
      handleSave(); 
      }}>
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
              onChange={handleExpChange} 
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
              onChange={handleExpChange} 
            />
          </div>

          <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="start">Start Date</label>
        <input 
        type="text" 
        name="start" 
        id="start" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={experienceData.start}
        onChange={handleExpChange} 
        placeholder='Enter start date'
        />
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="end">End Date</label>
        <input 
        type="text" 
        placeholder='Enter end date'
        name="end" 
        id="end" 
        value={experienceData.end}
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        onChange={handleExpChange} 
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
      onChange={handleExpChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[100px] pt-2' 
      />
      </div>
    
      <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5'><FaCheck /> 
      <p></p>
      </button>
    </div>
    </form>
    </div>
   </div>
  )
}

const ExperienceSection = () => {
 const { setShowExperienceForm, showExperienceForm, handleSaveExperience } = useContext(DataContext)

  const handleAddClick = () => {
    setShowExperienceForm(true);
  };

  const handleCloseForm = () => {
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
    </div>
   
  
  )
}

const ExpData = () => {

  const [experience, setExperience] = useState([])
  const expCollectionRef = collection(db, 'experience')

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const querySnapshot = await getDocs(expCollectionRef)
        const experienceData = []
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const user = auth.currentUser;
          if (data.userId === user.uid) {
          experienceData.push({...data, id: doc.id})
          }
  
        })
        setExperience(experienceData)
      } catch (error) {
        console.error('Error fetching experience data: ', error);
      }
    }
    fetchExp()
  }, [expCollectionRef])

  const deleteData = async (id) => {
    try {
      const dataDoc = doc(db, 'experience', id)
      await deleteDoc(dataDoc)
    } catch (error) {
      console.error('Error adding Experience data', error);
    }
  }

    return (
      <>
      <div className="flex gap-5 flex-col p-5">
      {experience.map((exp, index) => (
        <div className="bg-primary rounded-[10px] p-2.5 flex justify-between" key={`${exp.role}-${index}`} >
          <h2 >{exp.role}</h2>
          <button className=' flex justify-center items-center' onClick={() => {deleteData(exp.id)}}>
            <FaDeleteLeft 
              style={{
              height: '25px',
              width: '25px'
            }}/>
          </button>
        </div>
      ))}
    </div>
      </>
    );
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
          <h3 className="pl-2">Experience</h3>
        </div>

        <VscTriangleDown className="" />
      </button>

      {expCardVisible && 
      <>
        <ExpData />
        <ExperienceSection />

      </>
      } 
    </div>
  );
}

export default Experience