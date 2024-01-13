import React from 'react';

function Experience(props) {
    const experience = props.experience;
    const experienceStyle = {
        fontFamily: 'Familjen Grotesk, sans-serif', 
        background:'#FFF7E9',
    };

    return (
        <div className='Experience  h-auto ' style={experienceStyle } >    
            <div className="experience flex py-[80px] px-[156px]  h-30">
                <div >
                <p style={{ color: '#FFD635' }} className='text-[16px]'>Worked before at</p>
                <h1 className="text-[47px] font-normal mb-[60px]">Experience</h1>
                <div className="icons mt-[20px] flex-none gap-[50px] flex flex-wrap">
                    {experience.map((exp) => (
                        <div className="icon flex flex-col" key={exp.company}>
                            <div className='flex justify-center mb-[15px]'>
                            <img style={{ flex: 'none' }} src={exp.Imglink} className="h-[64px] w-[64px]" alt={exp.company} /></div>
                            <h3 className=" text-center text-[21px]" style={{color:'#161616'}} >{exp.company}</h3>
                            <h4 className=' text-center text-[16px]'>{exp.position}</h4>
                        </div>
                    ))}
                    </div>
                
                </div>
                <div>
                <img src="images/star.png" className='relative left-[5px] bottom-[10px] h-[104px] w-[104px]'/>
                <img src="images/small.png" className='relative left-[70px] bottom-[130px] h-[50px] w-[50px]'/>
                </div>
            </div>
            <img src="images/Halfstar.png" className='relative top-[-135px]'/>
            </div>
    );
}

export default Experience;
