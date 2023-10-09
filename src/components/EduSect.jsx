import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'

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
    <div>
      <h2 className='font-bold text-center text-[18px]'>Education</h2>
    {isLoading ? (
         <div className='w-full flex justify-center items-center'>
         <img src={loader} alt="Loading..." className='w-[15%]' />
       </div>
    ) : (
      education.map((edu, index) => (
        <div className="" key={`${edu.education}-${index}`}>
          <h2>{edu.degree}</h2>
          <p>{edu.school}</p>
          <p>{edu.country}</p>
          <div className="">
            <p>{edu.start}</p>
            <p>{edu.end}</p>
          </div>
        </div>
    ))
    ) }
    </div>
  )
}

export default EduSect
