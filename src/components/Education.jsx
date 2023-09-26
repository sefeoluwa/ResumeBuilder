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
    </div>
  )
}

export default education