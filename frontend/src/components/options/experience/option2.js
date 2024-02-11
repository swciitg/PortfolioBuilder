import React from 'react';
import FullStarExperience from "../../images/fullStarExperience.png";
import HalfStarExperience from "../../images/halfSttarExperience.png"

const option1 = (props) => {
    const {experienceTitle, experience } = props;
  return (
        <section className="w-full h-screen" id="experience" style={{ fontFamily: 'sans-serif',backgroundColor:"rgba(255,255,255,1)"}}>
        <div className="w-full px-0 md:px-32 pt-12 md:pt-24">
            <div><img className="hidden md:block absolute right-4 md:right-12 top-4 md:top-12 h-8 md:h-12 w-8 md:w-12" src={FullStarExperience} alt="star" /></div>
            
            <div className="ml-4 md:ml-28 mt-10 md:mt-4 mb-6 text-4xl" style={{ color: 'rgba(57, 57, 57, 1)' }}>{experienceTitle}</div>
            <div className="mt-3 md:mt-2 ml-4 md:ml-28 text-lg tracking-tight" style={{ color: 'rgba(22, 22, 22, 1)' }}>I’m proud to have collaborated with some awesome companies:</div>
            <div className="w-full md:px-20 mt-12 md:mt-16 mb-4 md:mb-8 flex gap-3 md:gap-6">
                
            {experience && experience.map((experience, index) => (
                <div key={index} className="w-28 md:w-48 p-3 rounded-lg">
                <div className="flex flex-col items-center">
                    {experience.experience.url && <img src={experience.experience.url} className="h-12 md:h-16 w-12 m:w-16 mb-2" alt="experience-logo" />}
                    <div className="text-[1rem] md:text-[1.05rem] capitalize text-center" style={{ color: 'rgba(22, 22, 22, 1)' }}>{experience.experience.company}</div>
                    <div className="mb-1 text-xs md:text-sm capitalize text-center" style={{ color: 'rgba(22, 22, 22, 0.5)' }}>{experience.experience.position}</div>
                </div>
                
                </div>
            ))}
            
            </div>
            <div className='w-fit px-5 py-2 rounded-xl border-2 mx-auto cursor-pointer hover:opacity-80' style={{"backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(57, 57, 57, 1)"}}>Resume</div>
        </div>
        </section>
  )
}

export default option1