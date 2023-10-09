import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

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
    <div>
      <h2 className='font-bold text-center text-[18px]'>Projects</h2>
      {isLoading ? (
        <div className="">Loading...</div>
      ) : (
        projects.map((project, index) => (
          <div className="" key={`${project.projectName}-${index}`}>
            <h3>{project.projectName}</h3>
            <p>{project.start}</p>
            <p>{project.end}</p>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ProjectsSect