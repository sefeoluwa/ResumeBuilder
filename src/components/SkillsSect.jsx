import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

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
    <div>
      <h2 className='font-bold text-center text-[18px]'>Skills</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        skills.map((skill, index) => (
          <div className="" key={`${skill.skill}-${index}`}>
            <h2>{skill.skill}</h2>
            <p>{skill.subSkill}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SkillsSect;
