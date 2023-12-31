import { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import   loader  from '/src/assets/loader.gif'

function Details() {
// Personal Details section

  const [personalList, setPersonalList] = useState([]);
  const personalCollectionRef = collection(db, 'personalDetails');

  const [isLoading, setIsLoading] = useState(true); 

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

  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     try {
  //       const querySnapshot = await getDocs(linksCollectionRef);
  //       const linksData = []
  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         const user = auth.currentUser;
  //         if (data.userId === user.uid) {
  //           linksData.push(data)
  //         }
  //       })
  //       setLinksList(linksData)
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchLinks()
  // }, [setIsLoading, linksCollectionRef])

  return (
    <>
    <div className=''>
      {isLoading ? (
        <div className='w-full flex justify-center items-center'>
        <img src={loader} alt="Loading..." className='w-[15%]' />
      </div>
      ) : (
        personalList.map((personal, index) => (
          <div className=" flex flex-col" key={`${personal}-${index}`}>
            <div className="">
            <h1 className='text-[32px] font-bold text-center pb-2'>{personal.fullName}</h1>
            </div>
            <div className="">
            <p className='text-[22px] font-bold italic text-center pb-1'>{personal.title}</p>
            </div>

           <div className="flex justify-around mt-5  items-center p-2 ">
           <div className='flex items-center p-2'> 
           <p className='mt-[-4px] pl-2'> {personal.email}</p>
           </div>

           {personal.number && (
             <div className='flex items-center p-2'> 
             <p className='mt-[-4px] pl-2'>{personal.number}</p>
             </div>
           )}
           
           {personal.address && (
             <div className='flex items-center p-2'> 
             <p className='mt-[-4px] pl-2'>{personal.address}</p>
             </div>
           )}
           </div>
          </div>
        ))
      )}
    </div>

    {/* <div className="">
  {linksList.map((link, index) => (
    <div className="flex justify-around" key={`${link.uid}-${index}`}>
      {link.linkedin && (
        <a href={link.linkedin} target="_blank" rel="noopener noreferrer" className='flex'>
          <AiFillLinkedin />
          <p className='mt-[-4px] ml-1'>LinkedIn</p>
        </a>
      )}
      {link.github && (
        <a href={link.github} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <AiFillGithub />
          <p className='mt-[-4px] ml-1'>GitHub</p>
        </a>
      )}
      {link.twitter && (
        <a href={link.twitter} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <AiFillTwitterCircle />
          <p className='mt-[-4px] ml-1'>Twitter</p>
        </a>
      )}
      {link.website && (
        <a href={link.website} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <FaLocationArrow />
          <p className='mt-[-4px] ml-1'>Portfolio</p>
        </a>
      )}
    </div>
  ))}
</div> */}

     
  </>
  );
}

export default Details;



