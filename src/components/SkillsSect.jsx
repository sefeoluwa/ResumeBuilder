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
   {skills.length > 0 && <h2 className='font-bold text-center text-[18px]'>Skills</h2>}
    <div className='ml-3 mr-3 p-3 flex justify-start flex-wrap gap-2 border-b-[5px] pb-5'>
      {isLoading ? (
          <div className='w-full flex justify-center items-center'>
          <img src={loader} alt="Loading..." className='w-[15%]' />
        </div>
      ) : (
        skills.map((skill, index) => (
          <div className="" key={`${skill.skill}-${index}`}>
           <div className=" p-2.5 rounded-[10px]">
           <h2 className='text-[17px]'>{skill.skill}  {
            skill.subSkill && (
              <span className='italic text-[14px]'>({skill.subSkill})</span>
            )
           }</h2>
           
           </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default SkillsSect;
