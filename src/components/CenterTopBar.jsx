import { FaTrash } from 'react-icons/fa'

function centerTopBar() {
  return (
    <>
    <div className="flex w-[100%] justify-between">
      <button className='flex'> 
        <FaTrash />
        <p>Clear Resume</p>
        </button>
      <button>Load Example</button>
    </div>
    </>
  )
}

export default centerTopBar