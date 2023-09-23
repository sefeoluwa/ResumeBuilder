

function personalDeets() {
  return (
    <div className='p-3 bg-secondary mt-4'>
    <p className='font-bold text-[20px] pl-2'>Personal Details</p>

    <form action="" className='mt-4 pl-2'>
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' required/>
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="email">Email <span className='text-[11px] text-gray-500 font-bold' >recommended</span> </label>
        <input type="email" name="email" id="email" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="number">Phone Number <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="number" name="number" id="number" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="address">Address <span className='text-[11px] text-gray-500 font-bold' >recommended</span></label>
        <input type="text" name="address" id="address" className='bg-primary outline-none pl-2 rounded-[10px] text-[14px] h-[40px]' />
    </div>
    </form>

    <p>Social Profiles</p>

    </div>
  )
}

export default personalDeets