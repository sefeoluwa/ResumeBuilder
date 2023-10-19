/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { FaGraduationCap, FaCheck } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'
import { GrAdd } from 'react-icons/gr'
import { useState, useContext } from 'react'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import DataContext from '../Context'

const EducationForm = ({ onSaveEducation, onClose, isAuth }) => {

  const { educationData, handleEduChange } = useContext(DataContext)

  const eduCollectionRef = collection(db, 'education')

  const handleSave = async () => {
    onSaveEducation(educationData);
    onClose();

    try {
      const user = auth.currentUser; 
      if (user) {
          const querySnapshot = await getDocs(eduCollectionRef);
          const eduData = [];
          querySnapshot.forEach((doc) => {
          const data = doc.data();
         if (data.userId === user.uid) {
            eduData.push(data);
         }
          });

          // check if user has existing eduData
          const existingEduData = eduData.find((data) => data.userId === user.uid)
          
          if(existingEduData) {
            // update data
            await updateDoc(doc(eduCollectionRef, 
              existingEduData.docId), {
                userId: user.uid,
                degree: educationData.degree,
                school: educationData.school,
                country: educationData.country,
                start: educationData.start,
                end: educationData.end,
                description: educationData.description,
              })
          } else {
            await addDoc(eduCollectionRef, {
              userId: user.uid,
              degree: educationData.degree,
              school: educationData.school,
              country: educationData.country,
              start: educationData.start,
              end: educationData.end,
              description: educationData.description,
            })
          }
      }
    } catch (error) {
      console.error('Error adding education data: ', error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return(

    <form action="" className='mt-4 pl-2' onSubmit={(e) => {
      e.preventDefault(); 
      handleSave(); 
      }}>
    <div className="flex flex-col gap-2">
      <label htmlFor="degree">Degree</label>
        <input 
        type="text" 
        name="degree" 
        id="degree" 
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        required 
        value={educationData.degree}
        placeholder='Enter Degree / Field of Study'
        onChange={handleEduChange} 
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="school">School</label>
        <input 
        type="text" 
        name="school" 
        id="school" 
        required
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        placeholder='Enter School / University' 
        value={educationData.school}
        onChange={handleEduChange} 
        />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="country">Country</label>
        <input 
        type="country" 
        name="country" 
        id="country" 
        required
        className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' 
        autoComplete='country-name' 
        placeholder='Enter Country'
        value={educationData.country}
        onChange={handleEduChange} 
        />
    </div>
 
   <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">Start Date</label>
        <input 
        type="text" 
        name="start" 
        id="title" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={educationData.start}
        onChange={handleEduChange} 
        placeholder='Enter start date'
        />
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">End Date</label>
        <input 
        type="text" 
        name="end" 
        id="title" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={educationData.end}
        onChange={handleEduChange} 
        placeholder='Enter end date'
        />
    </div>
   </div>
   <div className="h-[100px] flex flex-col gap-2 mt-3">
      <label htmlFor="description">Description</label>
        <textarea
        name="description" 
        id="description" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={educationData.description}
        onChange={handleEduChange} 
        placeholder='Give a description.'
        />
    </div>
   <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' type='submit'><FaCheck /> 
      <p></p>
      </button>
    </div>
    </form>
  )
}

const EducationCard = () => {
 
 const { showEducationForm, setShowEducationForm, handleSaveEducation } = useContext(DataContext) 

  const handleAddClick = () => {
    setShowEducationForm(true);
  };

  const handleCloseForm = () => {
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