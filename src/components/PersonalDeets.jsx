import { VscTriangleDown } from 'react-icons/vsc'

function personalDeets() {
  return (
    <div className='p-3 bg-secondary mt-4 rounded-[10px]'>
    <p className='font-bold text-[20px] pl-2 flex justify-between'>Personal Details <span > <button><VscTriangleDown /></button> </span></p>

    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' required/>
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="email">Email <span className='text-[11px] text-gray-500 font-bold' >recommended</span> </label>
        <input type="email" name="email" id="email" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="number">Phone Number <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="tel" name="number" id="number" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="address">Address <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="text" name="address" id="address" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="title">Job Title <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="title" id="title" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]'/>
    </div>
    </form>

    <p className='font-bold text-[18px] pl-2 mt-3 flex justify-between'>Social Profiles <span > <button><VscTriangleDown /></button> </span></p>
    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="title">LinkedIn <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="title" id="title" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.linkedin.com/in/johndoe/"/>
    </div>

    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="github">GitHub <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="github" id="github" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.github.com/johndoe/"/>
    </div>

    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="twitter">Twitter <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="twitter" id="twitter" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.linkedin.com/in/johndoe/"/>
    </div>

    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="website">Website <span className='text-[11px] text-gray-500 font-bold' >optional</span></label>
        <input type="text" name="website" id="website" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' placeholder="https://www.johndoe.com"/>
    </div>
    </form>
    </div>
  )
}

export default personalDeets