import { Details, EduSect, ExpSect, SkillsSect, ProjectsSect } from '../components'

function Resume() {
  return (
   <div className='flex justify-start flex-col bg-red-50 w-[50%]'>
   <Details />
   <SkillsSect />
   <EduSect />
   <ExpSect />
   <ProjectsSect />
   </div>
  )
}

export default Resume