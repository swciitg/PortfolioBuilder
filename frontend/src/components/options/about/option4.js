import React from 'react';
import HalfStar from "../../images/half_star.png";


const option4 = (props) => {
    const { FirstName, LastName, Thubmnail, Keywords, Description, Address, URL} = props;
  return (
        <div className=''>
            <div className="bg-white h-screen w-full absolute left-0 top-0 flex flex-col md:flex-row" style={{"fontFamily":"Manrope","color":"rgba(5, 15, 40, 1)"}}>
              <div className="md:h-[100vh] w-full md:w-1/2 pl-8 md:pl-28 pt-28 md:pt-36 flex flex-col" >
                <p className="text-start text-sm font-medium capitalize tracking-wide flex items-center w-fit px-3 py-2 mb-2 md:mb-4 rounded-full"style={{"backgroundColor":"rgba(226, 241, 254, 1)"}}>
                    <span class="material-symbols-outlined text-sm md:text-lg">location_on</span> 
                    <span className='px-1 tracking-wider'>{Address}</span>
                </p> 
                <div className="text-[2.5rem] md:text-6xl mt-1 flex flex-col leading-none mb-4" style={{"fontFamily":"roboto","color":"rgba(5, 15, 40, 1)","fontWeight":"800"}}>
                <span className="uppercase tracking-normal" >{FirstName}</span>
                <span className="uppercase tracking-normal">{LastName}</span>
                </div>
                <div className='relative flex items-center md:mt-3'>
                    <p className="z-10 text-start text-sm rounded-full font-medium capitalize tracking-wide py-2 px-3 w-fit" style={{"fontFamily":"Manrope","backgroundColor":"rgba(226, 241, 254, 1)","color":"rgba(5,15,40,1)"}}>{Keywords}</p>                
                    {/* <p className="w-fit h-full z-0 absolute left-3 top-0 text-start text-lg rounded-full font-medium capitalize tracking-wide py-2 px-3 " style={{"fontFamily":"Manrope","backgroundColor":"rgba(208, 230, 251, 1)","color":"rgba(208, 230, 251, 1)"}}>{Keywords}</p>  */}
                </div>               
                 
                <div className="mt-10 flex">
                    
                    
                    
                </div>              
              </div>
              <div className=" w-full md:w-1/2 pl-0 md:pl-12 mt-6 md:mt-24 mb-2 md:md:mb-4 flex items-center justify-center ">
                    <div className='relative w-fit h-full p-2 md:p-6 rounded-xl border flex items-center justify-center '>
                        <img className="z-10 h-full w-60 md:w-80 rounded-2xl bg-white object-cover md:p-2" src={Thubmnail} alt={FirstName}/>
                        <a href='#touch' className='z-10 absolute top-10 -left-12 md:-left-16 h-24 md:h-32 w-24 md:w-32 flex justify-center items-center'>
                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                                className='p-4'
                                >
                                <path
                                    id="circlePath1"
                                    d="
                                    M 10, 50
                                    a 40,40 0 1,1 80,0
                                    40,40 0 1,1 -80,0
                                    "
                                    className='bg-red-400'
                                />
                                <text className=''>
                                    <textPath href="#circlePath1" className='mb-2 tracking-[0.052em] text-center text-sm pb-4'>
                                    Contact    Contact   Contact  Contact
                                    </textPath>
                                </text>
                            </svg>
                        </a>
                        <a href={URL}  target="_blank" className='z-10 absolute -left-16 md:-left-20 top-40 md:top-44 h-32 md:h-40 w-32 md:w-40 flex justify-center items-center cursor-pointer'>
                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                                className='p-4'
                                >
                                <path
                                    id="circlePath2"
                                    d="
                                    M 10, 50
                                    a 40,40 0 1,1 80,0
                                    40,40 0 1,1 -80,0
                                    "
                                />
                                <text>
                                    <textPath href="#circlePath2" className='tracking-[0.07em] text-center text-sm pb-4'>
                                    Resume Resume Resume Resume
                                    </textPath>
                                </text>
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </div>

            {/* About */}
            <div className="absolute top-[100vh] left-0 w-full text-xl h-screen p-4 md:p-80 flex flex-col md:flex-row justify-start" id="about" style={{"backgroundColor":"rgba(5, 15, 40, 1)", "color":"rgba(255, 255, 255, 1)"}}>
                <div className="w-full pt-16 md:pt-24 md:px-24 flex flex-col">
                    <div className="mb-3 md:mb-6 font-medium text-2xl md:text-4xl" style={{"fontFamily":
                    "Manrope"}}>About</div>
                    <div className="my-3 font-light text-[1rem] leading-6 tracking-wide" style={{"fontFamily":
                    "Manrope"}}>{Description.slice(0,500)}</div>
                    <div className="absolute left-0 bottom-60 md:bottom-36 h-16 w-16"><img src={HalfStar} /></div>
                </div> 
                
                
            </div>
        </div>
  )
}

export default option4;