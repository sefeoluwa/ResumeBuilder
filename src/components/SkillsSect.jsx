import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'

function SkillsSect() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const skillsCollectionRef = collection(db, 'skills'); 
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(skillsCollectionRef);
        const skillsData = [];
        querySnapshot.forEach((doc) => {
          skillsData.push(doc.data());
        });
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching skills data: ', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchSkills();
  }, [skillsCollectionRef]);

  return (
    <>
   <h2 className='font-bold text-center text-[18px]'>Skills</h2>
    <div className='ml-3 p-3 flex justify-start flex-wrap gap-5'>
      {isLoading ? (
          <div className='w-full flex justify-center items-center'>
          <img src={loader} alt="Loading..." className='w-[15%]' />
        </div>
      ) : (
        skills.map((skill, index) => (
          <div className="" key={`${skill.skill}-${index}`}>
           <div className="mt-2 w-[150px]">
           <h2>{skill.skill}</h2>
            <p>{skill.subSkill}</p>
           </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default SkillsSect;
