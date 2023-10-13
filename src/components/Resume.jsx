import { PersonalDetails, EduSect, ExpSect, SkillsSect, ProjectsSect } from '../components'

function Resume() {
  return (
   <div className='resume flex justify-start flex-col  h-[29.7cm] w-[21cm] mr-20 mt-7 mb-12' id='resume'>
   <PersonalDetails />
   <SkillsSect />
   <EduSect />
   <ExpSect />
   <ProjectsSect />
   </div>
  )
}

export default Resume