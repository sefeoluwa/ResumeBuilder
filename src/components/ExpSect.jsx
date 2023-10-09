import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

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
    <div>
      <h2>Experience</h2>
      {isLoading ? (
        <div className="">Loading...</div>
      ) : (
        experience.map((exp, index) => (
          <div className="" key={`${exp.exp}-${index}`}>
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <p>{exp.start}</p>
            <p>{exp.end}</p>
            <p>{exp.description}</p>
  
          </div>
        ))
      )}
    </div>
  )
}

export default ExpSect