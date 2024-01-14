import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = () => {
  return (
    <>
   <div className='bg-[#FFFCDA] w-[100%] h-[50vh] flex flex-col '>

    <div className='relative  w-[100%] h-[40%] '>
   <span className='block font bold absolute top-[30%] left-[10%] font-semibold text-[40px] '>Experience</span>
    </div>

    <div className=' flex flex-col items-center  ' id="outer">
<button  className='button_slide slide_right sm:text-sm md:text-lg flex justify-between shadow-inner  bg-[#FFFCDA]  bg-opacity-20 sm:w-[100%] md:w-[90%] lg:w-[70%] rounded-md  border-[0.009px] p-2 my-2 border-gray-300'><div><span className=' sm:text-sm md:text-lg font-bold '>Software Engineer Intern &nbsp;.</span><span>&nbsp;Saimon Global Ltd</span></div><div className='date mx-2 text-gray-800 font-semibold'>Aug 2022-Oct 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </div></button>
<button className='button_slide slide_right sm:text-sm md:text-lg flex justify-between shadow-inner  bg-[#FFFCDA]  bg-opacity-20 sm:w-[100%] md:w-[90%] lg:w-[70%]  rounded-md  border-[0.009px] p-2 my-2 border-gray-300'><div><span className='font-bold'>Software Engineer Intern &nbsp;.</span><span>&nbsp;Saimon Global Ltd</span></div><div className='date mx-2 text-gray-800 font-semibold'>Aug 2022-Oct 2022  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </div></button>
<button className= 'button_slide slide_right sm:text-sm md:text-lg flex justify-between shadow-inner  bg-[#FFFCDA]  bg-opacity-20 sm:w-[100%] md:w-[90%] lg:w-[70%]  rounded-md  border-[0.009px] p-2 my-2 border-gray-300'><div><span className='font-bold'>Software Engineer Intern &nbsp;.</span><span>&nbsp;Saimon Global Ltd</span></div><div className='date mx-2 text-gray-800 font-semibold'>Aug 2022-Oct 2022  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </div></button>
    </div>

   </div>
    </>
  )
}

export default ExperienceCard