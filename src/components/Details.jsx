import { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Details() {
// Personal Details section

  const [personalList, setPersonalList] = useState([]);
  const personalCollectionRef = collection(db, 'personalDetails');

  const [isLoading, setIsLoading] = useState(true); 

  const linksCollectionRef = collection(db, 'links')
  const [linksList, setLinksList] = useState([])

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
          setIsLoading(false); 
        }
      };

      queryPersonalDetails();
    
  }, [setIsLoading, personalCollectionRef]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const querySnapshot = await getDocs(linksCollectionRef);
        const linksData = []
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const user = auth.currentUser;
          if (data.userId === user.uid) {
            linksData.push(data)
          }
        })
        setLinksList(linksData)
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchLinks()
  }, [setIsLoading, linksCollectionRef])

  return (
    <>
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

    <div className="">
      {linksList.map((link, index) => (
         <div className="flex justify-between" key={`${link.uid}-${index}`}>
         <a href={link.linkedin} target="_blank" rel="noopener noreferrer">
           LinkedIn
         </a>
         <a href={link.github} target="_blank" rel="noopener noreferrer">
           GitHub
         </a>
         <a href={link.twitter} target="_blank" rel="noopener noreferrer">
           Twitter
         </a>
         <a href={link.website} target="_blank" rel="noopener noreferrer">
           Website
         </a>
        </div>
      ))}
    </div>
     
  </>
  );
}

export default Details;



