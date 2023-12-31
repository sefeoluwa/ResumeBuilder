import { PersonalDetails, EduSect, ExpSect, SkillsSect, ProjectsSect } from '../components'

function Resume() {
  return (
   <div className='flex justify-start  flex-col h-[29.7cm] w-[21cm] mt-7 mb-12'  id='resume'>
   <PersonalDetails />
   <SkillsSect />
   <EduSect />
   <ExpSect />
   <ProjectsSect />
   </div>
  )
}

export default Resume