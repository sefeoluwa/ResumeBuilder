import { FaTrash } from 'react-icons/fa'

function centerTopBar() {
  return (
    <>
    <div className="flex w-[100%] justify-between bg-white h-12 rounded-[10px] p-2">
      <button className='flex justify-center w-[45%] pt-1'> 
        <FaTrash style= {{
          color: '#d21404',
          marginTop: '3px'
        }} />
        <p className='text-[#d21404] ml-2 text-[16px]'>Clear</p>
        </button>
      <button className='w-[45%] bg-[#f2f2f2] rounded-[10px] text-[16px]'>Load Example</button>
    </div>
    </>
  )
}

export default centerTopBar