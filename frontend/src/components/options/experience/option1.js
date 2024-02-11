import React from 'react';
import FullStarExperience from "../../images/fullStarExperience.png";
import HalfStarExperience from "../../images/halfSttarExperience.png"

const option1 = (props) => {
    const {experienceTitle ,experience} = props;
  return (
        <section className="w-full h-screen" id="experience" style={{ fontFamily: 'sans-serif' }}>
        <div className="w-full px-4 md:px-32 pt-12 md:pt-24">
            <div><img className="hidden md:block absolute right-4 md:right-12 top-4 md:top-12 h-8 md:h-12 w-8 md:w-12" src={FullStarExperience} alt="star" /></div>
            <div><img className="absolute right-8 md:right-24 top-20 md:top-20 h-20 w-20" src={FullStarExperience} alt="star" /></div>
            <div><img className="absolute left-0 bottom-0 h-32 w-32 rotate-90" src={HalfStarExperience} alt="star" /></div>
            <div className="mt-10 md:mt-4 ml-4 md:ml-28 text-xl tracking-tight" style={{ color: 'rgba(255, 214, 53, 1)' }}>Worked before at</div>
            <div className="ml-4 md:ml-28 mt-1 md:mt-2 mb-6 text-4xl" style={{ color: 'rgba(22, 22, 22, 1)' }}>{experienceTitle}</div>
            <div className="w-full px-4 md:px-28 mt-12 md:mt-16 flex gap-3 md:gap-6">
            {experience && experience.map((experience, index) => (
                <div key={index} className="w-28 md:w-48 p-3 rounded-lg border">
                <div className="flex flex-col items-center">
                    <img src={experience.experience.url} className="h-12 md:h-16 w-12 m:w-16 mb-2" alt="experience-logo" />
                    <div className="text-[1rem] md:text-[1.05rem] capitalize text-center" style={{ color: 'rgba(22, 22, 22, 1)' }}>{experience.experience.company}</div>
                    <div className="mb-1 text-xs md:text-sm capitalize text-center" style={{ color: 'rgba(22, 22, 22, 0.5)' }}>{experience.experience.position}</div>
                </div>
                <div className="text-xs md:text-sm text-gray-400 flex justify-center text-center">
                    <span>{`${experience.experience.start} - ${experience.experience.end ? experience.experience.end : experience.experience.presentJob ? 'Present' : ''}`}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
  )
}

export default option1