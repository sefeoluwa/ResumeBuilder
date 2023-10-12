import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'

const ProjectsSect = () => {
  const projectsCollectionRef = collection(db, 'projects')
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(projectsCollectionRef)
        const projectsData = []
        querySnapshot.forEach((doc) => {
          projectsData.push(doc.data())
        })
        setProjects(projectsData)
      } catch (error) {
        console.error('Error fetching skills data: ', error);
      } finally {
        setIsLoading(false); 
      }
    }
    fetchProjects()
  }, [projectsCollectionRef])


  return (
    <div className='p-5 ml-3 mr-3'>
      <h2 className='font-bold text-center text-[18px]'>Projects</h2>
      {isLoading ? (
           <div className='w-full flex justify-center items-center'>
           <img src={loader} alt="Loading..." className='w-[15%]' />
         </div>
      ) : (
        projects.map((project, index) => (
          <div className="" key={`${project.projectName}-${index}`}>
            <h3>{project.projectName}</h3>
           <div className="flex gap-2 italic">
           {project.start && (
            <p>{project.start} |</p>
           )}
            {project.end && (
              <p>{project.end}</p>
            )}
           </div>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ProjectsSect