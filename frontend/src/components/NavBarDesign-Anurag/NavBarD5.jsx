import React from 'react'

const NavBarD5 = () => {
  return (
    <div className='flex lg:h-[10%] sm:h-[50%]  justify-center'>
    <div className='list-none flex lg:flex-row sm:flex-col justify-center gap-[10%] items-center bg-[#1D1D1D] w-[70%]  my-2 mx-2  rounded-2xl'> 
   
       <a href="#"  className='hover:text-blue'> <li className='inline-block text-white hover:text-blue-500 text-center '>About</li></a>
       <a href="#" className='hover:text-blue'>   <li className='inline-block text-white hover:text-blue-500  text-center '>Experience</li></a>
       <a href="#" className='hover:text-blue'>  <li className='inline-block text-white hover:text-blue-500  text-center '>Projects</li></a>
        <a href="#" className='hover:text-blue'>  <li className='inline-block text-white hover:text-blue-500  text-center '>Skills</li></a>
        <a href="#" className='hover:text-blue'>  <li className='inline-block text-white hover:text-blue-500  text-center '>Resume</li></a>
        <a href="#" className='border-2 border-white p-[6px]  rounded-2xl'>  <li className='inline-block text-white hover:text-blue-500  text-center '>Get in Touch</li></a>
  
    </div>
    </div>
  )
}

export default NavBarD5