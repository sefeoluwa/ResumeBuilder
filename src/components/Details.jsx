import { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Details() {
  const [personalList, setPersonalList] = useState([])
  const personalCollectionRef = collection(db, 'personalDetails')

  useEffect(() => {
  const user = auth.currentUser;

  if(user) {
    const queryPersonalDetails = async () => {
      const querySnapshot = await getDocs(personalCollectionRef);
      const persData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data()

        if (data.userId === user.uid) {
          persData.push(data);
        }
      })
      setPersonalList(persData)
    }
    queryPersonalDetails();
  }
  }, [personalCollectionRef])


  return (
    <>
    <div>
    {personalList.map((personal, index) => (
      <div className="" key={`${personal.fullName}-${index}`}>
        <h2>{personal.fullName}</h2>
        <p>{personal.email}</p>
        <p>{personal.number}</p>
        <p>{personal.address}</p>
        <p>{personal.title}</p>
      </div>
    ))}





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
</div>

    </>
  )
}

export default Details