import { useEffect, useState } from 'react';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const SkillsSect = () => {
  const [skillsList, setSkillsList] = useState([]);

  const skillsCollectionRef = collection(db, 'skills');

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const querySkills = async () => {
        const querySnapshot = await getDocs(skillsCollectionRef);
        const skillsData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId === user.uid) {
            skillsData.push(data);
          }
        });
        setSkillsList(skillsData);
      };
      querySkills();
    }
  }, [skillsCollectionRef]);

  return (
    <div>
      {skillsList.map((skill, index) => (
        <div className='' key={`${skill.skill}-${index}`}>
          <h2>{skill.skill}</h2>
          <p>{skill.subSkill}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSect;
