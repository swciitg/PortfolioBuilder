import React from 'react';

const NavbarDesign1 = ({
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
  experiences,
  educations,
  skills,
  interests,
  awards,
  projects,
}) => {
  return (
    <div className='fixed top-0 left-0 z-20 w-full rounded-full flex justify-center font-Manrope' >
      <div className='w-full md:w-[68%] flex justify-between items-center mt-4 mx-4 md:mx-8 font-normal rounded-full p-2 md:p-3 text-sm text-white' style={{"backgroundColor":"rgba(29, 29, 29, 1)"}}> 

        <a href="#about"  className='mx-2 md:mx-3'> 
          <li className='inline-block  hover:text-blue-400 text-center hover:scale-[1.03]'>// about</li>
        </a>
        {isExperienceEnabled && experiences && experiences.length > 0 && (<a href="#experience" className='mx-2 md:mx-3'>   
            <li className='inline-block hover:text-blue-400 text-center hover:scale-[1.03]'>// experience</li>
        </a>)}
        {isEducationEnabled && educations && educations.length > 0 && (<a href="#education" className='hidden md:block mx-2 md:mx-3'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>// education</li>
        </a>)}
        {isSkillEnabled && skills && skills.length > 0 && (<a href="#skills" className='hidden md:block hover:text-blue-500 mx-1 md:mx-3'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>// skills</li>
        </a>)}
        {isInterestEnabled && interests && interests.length > 0 && (<a href="#interests" className='hidden md:block mx-2 md:mx-3'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>// interests</li>
        </a>)}
        {isAwardsEnabled && awards && awards.length > 0 && (<a href="#awards" className='hidden md:block mx-2 md:mx-3'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>// awards</li>
        </a>)}
        {isProjectEnabled && projects && projects.length > 0 && (<a href="#projects" className='rounded-2xl mx-2 md:mx-3'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>// projects</li>
        </a>)}
        <a href="#touch" className='rounded-2xl mx-2 md:mx-3 hover:text-blue-400'>  
            <li className='inline-block text-center hover:scale-[1.03] border border-white rounded-md p-1'>// get in touch</li>
        </a>
        

      </div>
    </div>
  );
};

export default NavbarDesign1;
