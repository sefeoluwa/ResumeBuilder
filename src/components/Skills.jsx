import { GiSkills } from 'react-icons/gi' 
import { VscTriangleDown } from 'react-icons/vsc'
import { GrAdd  } from 'react-icons/gr'
import { BsCheckLg } from 'react-icons/bs'

const SkillForm = () => {
  return(
   <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
    <h3 className='font-bold text-[20px]'>Create Skill</h3>
    <div className="mt-4">
    <form action="">
       <div className="flex flex-col gap-2">
      <label htmlFor="skill">Skill 
      <span className='text-[red] ml-1'>*</span>
      </label>
      <input type="text" id='skill' aria-label='skill' name='skill' required placeholder='Enter skill' className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
      </div>

      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="subSkill">Information / Sub-skills 
      <span className='text-[11px] text-gray-500 font-bold ml-2'>recommended</span>
      </label>
      <textarea id='subSkill' aria-label='subSkill' name='subSkill' required placeholder='Enter more information or sub-skills' className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px] pt-2' />
      </div>
    

<div className="flex flex-col gap-2 mt-4">
<label htmlFor="skillLevel">Select skill Level</label>
        <select name='skillLevel' id='skillLevel' required className='outline-none p-[10px] rounded-[10px] border-none cursor-pointer'>
        <option value="select" className='select'>Skill level</option>
        <option value="novice">Novice</option>
        <option value="beginner">Beginner</option>
        <option value="skillful">Skillful</option>
        <option value="experienced">Experienced</option>
        <option value="expert">Expert</option>
        </select>
</div>
    </form>
    </div>
    <div className="bg-secondary flex justify-end mt-6">
      <button className='mr-14 font-bold'>Cancel</button>
      <button className='savebtn flex justify-center items-center font-bold text-white rounded-[25px] w-[30%] h-[40px] p-5'><BsCheckLg /> 
      <p></p>
      </button>
    </div>
   </div>
  )
}

function skills() {
  return (
    <div className='p-3 bg-secondary mt-4 rounded-[10px] pb-6'>
     <button className="flex justify-between pl-2 pt-3 w-full">
      <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <GiSkills
        style={{
          height: '30px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Skills</h3>
      </div>

      <VscTriangleDown className='' />
    </button>

    <div className="flex justify-center">
    <button className='flex justify-center items-center border-primary border-solid border-[5px] w-[40%] h-[45px] rounded-[30px] font-bold'> <GrAdd /> Skills </button>
    </div>
   
    </div>
   
  )
}

export default skills