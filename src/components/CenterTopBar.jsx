/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import DataContext from '../Context'

function centerTopBar() {
  const { generatePDF } = useContext(DataContext)
  return (
    <>
    <button
    onClick={generatePDF}
    className="download font-bold flex w-[100%] justify-between bg-white h-12 rounded-[10px] p-2 sticky top-[10px]">
      <p className='flex justify-center w-full pt-1'> 
        <FaFileDownload style= {{
          color: '#fff',
          marginTop: '3px'
        }} />
        <p className='text-white ml-2 text-[16px]'>Download PDF</p>
        </p>
      
    </button>
    </>
  )
}

export default centerTopBar