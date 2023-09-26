import { FaGraduationCap } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'

function education() {
  return (
    <div className='p-3 bg-secondary mt-4 rounded-[10px]'>
    <button className="flex justify-between pl-2 pt-3 w-full">
      <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <FaGraduationCap
        style={{
          height: '30px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Education</h3>
      </div>

      <VscTriangleDown className='' />
    </button>

    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" id="degree" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' required placeholder='Enter Degree / Field of Study'/>
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='Enter School / University' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="country">Country</label>
        <input type="" name="country" id="country" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' autoComplete='country-name' placeholder='Enter Country'/>
    </div>
 
   <div className="flex justify-between pr-2">
   <div className=" w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">Start Date</label>
        <input type="date" name="title" id="title" className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'/>
    </div>
    <div className="w-[45%] flex flex-col gap-2 mt-3">
      <label htmlFor="title">End Date</label>
        <input type="date" name="title" id="title" className='bg-primary outline-none pl-2 pr-2 rounded-[10px] text-[14px] h-[40px] cursor-pointer'/>
    </div>
   </div>
    </form>
    </div>
  )
}

export default education