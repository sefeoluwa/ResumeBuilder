/* eslint-disable react-refresh/only-export-components */
import { VscTriangleDown } from 'react-icons/vsc'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { useState } from 'react'

const PersonalCard = () => {
  return(
    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='John Doe' required/>
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="email">Email <span className='text-[11px] text-gray-500 font-bold' >recommended</span> </label>
        <input type="email" name="email" id="email" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='johndoe@gmail.com' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="number">Phone Number <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="tel" name="number" id="number" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='Phone' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="address">Address <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="text" name="address" id="address" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='Lagos, Nigeria' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="title">Job Title <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="title" id="title" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder='Frontend Engineer'/>
    </div>
    </form>   
  )
}

const Personal = () => {
  const [persCardVisible, setPersCardVisible] = useState(false)
  const handleArrowBtnClick = () => {
    setPersCardVisible(!persCardVisible)
  }

  return(
    <div className='p-3 pb-6 bg-secondary mt-4 rounded-[10px]'>
      <button 
      className='font-bold text-[20px] pl-2 pt-3 flex justify-between w-full'
      onClick={handleArrowBtnClick}
      >
        <div className='flex font-bold text-[18px] mt-[-4px] pb-2'> 
        <BsPersonBoundingBox
        style={{
          height: '28px',
          width: '30px'
        }}
        /> 
        <h3 className='pl-2'>Personal Details</h3>
      </div>
      <VscTriangleDown className='' />
     </button>

    {persCardVisible && <PersonalCard />}
    </div>
  )
}

const SocialsCard = () => {
  return(
    <form action="" className='mt-4 pl-2'>
<div className="flex flex-col gap-2">
  <label htmlFor="title">LinkedIn <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
    <input type="url" name="title" id="title" className='bg-primary outline-none pl-2 rounded-[10purl-[14px] h-[40px]' placeholder="https://www.linkedin.com/in/johndoe/"/>
</div>

<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="github">GitHub <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
    <input type="url" name="github" id="github" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.github.com/johndoe/"/>
</div>

<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="twitter">Twitter <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
    <input type="url" name="twitter" id="twitter" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.linkedin.com/in/johndoe/"/>
</div>

<div className="flex flex-col gap-2 mt-3">
  <label htmlFor="website">Website <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
    <input type="url" name="website" id="website" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.johndoe.com"/>
</div>
</form>
  )
}

const Socials = () => {
  const [socialCardVisible, setSocialCardVisible] = useState(false)

  const handleArrowBtnClick = () => {
    setSocialCardVisible(!socialCardVisible)
  }
 
  return(
    <div className="p-3 pb-6 bg-secondary mt-4 rounded-[10px]">
      <button 
      className='w-full font-bold text-[18px] pl-2 mt-3 flex justify-between'
      onClick={handleArrowBtnClick}
      >
      Social Profiles 
      <span > <VscTriangleDown /></span>
      </button>

      {socialCardVisible && <SocialsCard />}

    </div>
  )
}

function personalDeets() {
  return (
    <>
    <Personal />
    <Socials />
    </>
  )
}

export default personalDeets