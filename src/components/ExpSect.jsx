import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'
import { GoDash } from 'react-icons/go'


const ExpSect = () => {
const [experience, setExperience] = useState([])
const [isLoading, setIsLoading] = useState(true)
const expCollectionRef = collection(db, 'experience')

useEffect(() => {
  const fetchExp = async () => {
    try {
      const querySnapshot = await getDocs(expCollectionRef)
      const experienceData = []
      querySnapshot.forEach((doc) => {
        experienceData.push(doc.data())
      })
      setExperience(experienceData)
    } catch (error) {
      console.error('Error fetching experience data: ', error);
    } finally {
      setIsLoading(false); 
    }
  }
  fetchExp()
}, [expCollectionRef])

  return (
    <div className='p-5 border-b-[5px] ml-3 mr-3'>
      {experience.length > 0 && <h2 className='font-bold text-center text-[18px]'>Experience</h2>}
      {isLoading ? (
        <div className='w-full flex justify-center items-center'>
        <img src={loader} alt="Loading..." className='w-[15%]' />
      </div>
      ) : (
        experience.map((exp, index) => (
          <div className="text-[14px]" key={`${exp.exp}-${index}`}>
            <div className="flex gap-3">
             <div className="w-[35%]">
                <div className="flex gap-1">
                  <h3 className='font-bold'>{exp.role},</h3>
                  <p className='italic'>{exp.company}</p>
               </div>
                <div className="flex gap-1">
                  {exp.start && (
                    <p className='flex gap-1'>{exp.start}  <span className='mt-0.5'><GoDash /> </span></p>
                  )}
                 {exp.end  && (
                    <p>{exp.end}</p>
                 )}
               </div>
              </div>

              <p>{exp.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ExpSect