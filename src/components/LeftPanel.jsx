import { FaRegNewspaper} from 'react-icons/fa'
import { BsBorderStyle } from 'react-icons/bs'

function leftPanel() {
  return (
    <div className='flex flex-col justify-between h-[15vh] p-2 w-[18%]'>
      <button className='flex'>
        <FaRegNewspaper 
        style={{
          marginTop: '4px'
        }}
        />
        <p className='ml-[5px] text-[18px]'>Content</p>
        </button>
      <button className='flex'> 
        <BsBorderStyle
         style={{
          marginTop: '4px'
        }}
         />
         <p className='ml-[5px] text-[18px]'>Customize</p>
         </button>
    </div> 
  )
}

export default leftPanel