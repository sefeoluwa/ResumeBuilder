import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import   loader  from '/src/assets/loader.gif'
import { GoDash } from 'react-icons/go'


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
        console.error('Error fetching projects data: ', error);
      } finally {
        setIsLoading(false); 
      }
    }
    fetchProjects()
  }, [projectsCollectionRef])


  return (
    <div className='p-5 ml-3 mr-3'>
     {projects.length > 0 && <h2 className='font-bold text-center text-[18px]'>Projects</h2>}
      {isLoading ? (
           <div className='w-full flex justify-center items-center'>
           <img src={loader} alt="Loading..." className='w-[15%]' />
         </div>
      ) : (
        projects.map((project, index) => (
          <div className="text-[14px]" key={`${project.projectName}-${index}`}>
            <div className="flex gap-3">
            <div className="w-[35%]">
              <h3 className='font-bold'>{project.projectName}</h3>
                <div className="flex gap-1">
              {project.start && (
                <p className='flex gap-1'>{project.start}  <span className='mt-0.5'><GoDash /> </span></p>
              )}
                {project.end && (
                  <p>{project.end}</p>
                )}
              </div>
            </div>
            <p>{project.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ProjectsSect