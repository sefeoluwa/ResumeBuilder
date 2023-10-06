import { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Details() {
  const [personalList, setPersonalList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const personalCollectionRef = collection(db, 'personalDetails');

  useEffect(() => {
      const queryPersonalDetails = async () => {
        try {
          const querySnapshot = await getDocs(personalCollectionRef);
          const persData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const user = auth.currentUser;
            if (data.userId === user.uid) {
              persData.push(data);
            }
          });
          setPersonalList(persData);
        } catch (error) {
          console.error('Error fetching personal data: ', error);
        } finally {
          setIsLoading(false); // Set isLoading to false after the request is completed
        }
      };

      queryPersonalDetails();
    
  }, [setIsLoading, personalCollectionRef]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        personalList.map((personal, index) => (
          <div className="" key={`${personal.fullName}-${index}`}>
            <h2>{personal.fullName}</h2>
            <p>{personal.email}</p>
            <p>{personal.number}</p>
            <p>{personal.address}</p>
            <p>{personal.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Details;



 {/* </div>
    <div className="flex justify-between">
  <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href={socialData.github} target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href={socialData.twitter} target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
  <a href={socialData.website} target="_blank" rel="noopener noreferrer">
    Website
  </a> */}