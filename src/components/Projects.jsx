/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { VscTriangleDown } from 'react-icons/vsc'
import { FaBriefcase, FaCheck } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr';
import { useContext, useState, useEffect } from 'react';
import DataContext from '../Context';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase-config';



const ProjectsForm = ({ onSaveProjects, onClose, isAuth }) => {
const { projectsData, setProjectsData, handleProjectChange } = useContext(DataContext)

const projectsCollectionRef = collection(db, 'projects')


  const handleSave = async () => {
    onSaveProjects(projectsData);
    onClose();

    try {
      const user = auth.currentUser; 
      if (user) {
        const docRef = await addDoc(projectsCollectionRef, {
          userId: user.uid,
          projectName: projectsData.projectName,
          start: projectsData.start,
          end: projectsData.end,
          description: projectsData.description,
        });
        setProjectsData({
          projectName: '',
          start: '',
          end: '',
          description: '',
        });
      }
    } catch (error) {
      console.error('Error adding project data: ', error);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(projectsCollectionRef);
      const projectsData = [];
      querySnapshot.forEach((doc) => {
        projectsData.push(doc.data());
      });
    };
    fetchProjects();
  }, [projectsCollectionRef]);

  const handleCancel = () => {
    onClose();
  };

  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create Projects</h3>
    <div className="mt-4">
    <form action=""  onSubmit={(e) => {
      e.preventDefault(); 
      handleSave(); 
      }}>
       <div className="flex flex-col gap-2">
      <label htmlFor="projectName">Project Name 
      <span className='text-[red] ml-1'>*</span>
      </label>
      <input
              type="text"
              id="projectName"
              aria-label="role"
              name="projectName"
              required
              placeholder="Enter project name"
              className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]'
              value={projectsData.projectName}
              onChange={handleProjectChange} 
            />
          </div>

          <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="start">Start Date</label>
        <input 
        type="text" 
        name="start" 
        placeholder='Enter start date'
        id="start" 
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        value={projectsData.start}
        onChange={handleProjectChange} 
        />
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="end">End Date</label>
        <input 
        type="text" 
        name="end" 
        id="end" 
        value={projectsData.end}
        className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'
        onChange={handleProjectChange} 
        placeholder='Enter end date'
        />
    </div>
   </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="description">Description
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='description' 
      aria-label='description' 
      name='description' 
      required 
      placeholder='Give project description' 
      value={projectsData.description}
      onChange={handleProjectChange}
      className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[100px] pt-2' 
      />
      </div>
    
      <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold' onClick={handleCancel} >Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5' ><FaCheck /> 
      <p></p>
      </button>
    </div>
    </form>
    </div>
   </div>
  )
}

const ProjectsSection = () => {
const { projects, showProjectsForm, setShowProjectsForm, handleSaveProjects } = useContext(DataContext)

  const handleAddClick = () => {
    setShowProjectsForm(true);
  };

  const handleCloseForm = () => {
    setShowProjectsForm(false);
  };




  return (
    <div className=''>
    <div className="flex justify-center">
    <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold' onClick={handleAddClick}> <GrAdd /> Add</button>
    </div>
   
    {showProjectsForm && (
        <ProjectsForm onSaveProjects={handleSaveProjects} onClose={handleCloseForm} />
      )}

      
      {projects.map((projects, index) => (
        <div key={index}>{/* Render each Projects here */}</div>
      ))}
    </div>
   
  
  )
}

function Projects() {
  const [expCardVisible, setExpCardVisible] = useState(false);

  const handleArrowBtnClick = () => {
    setExpCardVisible(!expCardVisible); 
  };

  return (
    <div className="p-3 bg-secondary mt-4 rounded-[10px] pb-6">
      <button
        className="flex justify-between pl-2 pt-3 w-full"
        onClick={handleArrowBtnClick}
      >
        <div className="flex font-bold text-[18px] mt-[-4px] pb-2">
          <FaBriefcase
            style={{
              height: '30px',
              width: '30px',
            }}
          />
          <h3 className="pl-2">Projects</h3>
        </div>

        <VscTriangleDown className="" />
      </button>

      {expCardVisible && <ProjectsSection />} 
    </div>
  );
}

export default Projects