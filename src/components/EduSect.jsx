import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'
import { GoDash } from 'react-icons/go'

const EduSect = () => {
 
const [education, setEducation] = useState([])
const [isLoading, setIsLoading] = useState(true)
const eduCollectionRef = collection(db, 'education')

useEffect(() => {
  const fetchEducation = async () => {
    try {
      const querySnapshot = await getDocs(eduCollectionRef)
      const eduData = []
      querySnapshot.forEach((doc) => {
        eduData.push(doc.data())
      })
      setEducation(eduData)
    } catch (error) {
      console.error('Error fetching education data: ', error);
    } finally {
      setIsLoading(false); 
    }
  }
  fetchEducation()
}, [eduCollectionRef])

  return (
    <>
    <h2 className='font-bold text-center text-[18px] mt-3'>Education</h2>
    <div className='p-5 border-b-[5px] ml-3 mr-3 text-[14px]'>
      
    {isLoading ? (
         <div className='w-full flex justify-center items-center'>
         <img src={loader} alt="Loading..." className='w-[15%]' />
       </div>
    ) : (
      education.map((edu, index) => (
        <div className="mb-5" key={`${edu.education}-${index}`}>
         <div className="flex gap-3">
           <div className="w-[35%]">
              <div className="flex gap-1">
                <h2 className='font-semibold'>{edu.degree},</h2>
                <p className='italic'>{edu.school}, {edu.country}</p>
              </div>
              <div className="flex gap-1">
                {edu.start && (
                  <p className='flex gap-1'>{edu.start} <span className='mt-0.5'><GoDash /> </span></p>
                )}
                {edu.end  && (
                  <p>{edu.end}</p>
                )}
              </div>
            </div>
            <p>{edu.description}</p>
         </div>
        </div>
    ))
    ) }
    </div>
    </>
  )
}

export default EduSect
