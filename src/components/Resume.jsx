import { Details, EduSect, ExpSect, SkillsSect, ProjectsSect } from '../components'

function Resume() {
  return (
   <div className='flex justify-start flex-col  w-[50%]'>
   <Details />
   <SkillsSect />
   <EduSect />
   <ExpSect />
   <ProjectsSect />
   </div>
  )
}

export default Resume