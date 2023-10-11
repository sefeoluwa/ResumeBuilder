import { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/bs'
import {FaLocationArrow} from 'react-icons/fa6'
import   loader  from '/src/assets/loader.gif'

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
    <div className=''>
      {isLoading ? (
        <div className='w-full flex justify-center items-center'>
        <img src={loader} alt="Loading..." className='w-[15%]' />
      </div>
      ) : (
        personalList.map((personal, index) => (
          <div className=" flex flex-col" key={`${personal.fullName}-${index}`}>
            <div className="">
            <h1 className='text-[32px] font-bold text-center pb-3'>{personal.fullName}</h1>
            </div>
            <div className="">
            <p className='text-[25px] text-center pb-3'>{personal.title}</p>
            </div>
           <div className="flex justify-between p-2 mb-3">
           <p className='flex p-2'> <MdMail /> 
           <p className='mt-[-4px] pl-2'>{personal.email}</p>
           </p>
            <p className='flex'> <BsFillTelephoneFill /> 
            <p className='mt-[-4px] pl-2'>{personal.number}</p>
            </p>
            <p className='flex'> <BsFillHouseDoorFill /> 
            <p className='mt-[-4px] pl-2'>{personal.address}</p>
            </p>
          
           </div>
          </div>
        ))
      )}
    </div>

    <div className="">
      {linksList.map((link, index) => (
         <div className="flex justify-center" key={`${link.uid}-${index}`}>
         <a href={link.linkedin} target="_blank" rel="noopener noreferrer" className='flex'>
          <AiFillLinkedin />
          <p className='mt-[-4px] ml-1 '>LinkedIn</p>
         </a>
         <a href={link.github} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <AiFillGithub />
          <p className='mt-[-4px] ml-1'> GitHub</p>
         </a>
         <a href={link.twitter} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <AiFillTwitterCircle />
           <p className='mt-[-4px] ml-1'>Twitter</p>
         </a>
         <a href={link.website} target="_blank" rel="noopener noreferrer" className='flex ml-5'>
          <FaLocationArrow />
          <p className='mt-[-4px] ml-1'> Portfolio</p>
         </a>
        </div>
      ))}
    </div>
     
  </>
  );
}

export default Details;



