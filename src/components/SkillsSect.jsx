import { useContext, useEffect, useState } from 'react';
import DataContext from '../Context';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const SkillsSect = () => {
  const { skills } = useContext(DataContext);
  const [skillsList, setSkillsList] = useState([]);

  const skillsCollectionRef = collection(db, 'skills'); // Replace 'skills' with your Firestore collection name

  useEffect(() => {
    const user = auth.currentUser; // Get the currently signed-in user

    if (user) {
      // Fetch user-specific skills from Firestore
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
