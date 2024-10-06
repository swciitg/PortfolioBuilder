import React from 'react';

const option3 = (props) => {
    const { FirstName, LastName, Thubmnail, Keywords, Description, URL} = props;
  return (
        <div>
            <div className="h-screen w-full absolute left-0 top-0 bg-black">
              <div className="h-[100vh] w-full flex flex-col justify-center items-center" >
                  <div className="text-[3.5rem] text-center md:text-8xl my-2 flex gap-4 leading-none" style={{"fontFamily":"roboto","color":"rgba(255, 255, 255, 1)"}}>
                    <span className="font-semibold md:font-bold uppercase tracking-normal">{FirstName}</span>
                    <span className="font-semibold md:font-bold uppercase tracking-normal">{LastName}</span>
                  </div>
                  <p className="text-center text-2xl md:text-3xl font-norma uppercase" style={{"fontFamily":"roboto","color":"rgba(255, 255, 255, 1)"}}>{Keywords}</p>  
                  <div className="mt-10 flex">
                        <a href="#touch" className='px-5 py-2 rounded-xl mr-2 cursor-pointer hover:opacity-90 hover:text-white border' style={{"color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(28, 28, 28, 1)","borderColor":"rgba(255, 255, 255, 1)"}}>Contact</a>
                        <a href={URL}  target="_blank" className='px-5 py-2 rounded-xl border ml-2 cursor-pointer hover:opacity-90' style={{"backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(57, 57, 57, 1)"}}>Resume</a>
                </div>              
              </div>
            </div>

              <div className="absolute top-[100vh] left-0 bg-black w-full text-xl h-screen p-4 md:p-80 flex flex-col md:flex-row justify-start" id="about">
                <div className="w-full pt-16 md:pt-20 md:px-24 flex flex-col">
                  <div className="mb-2 md:mb-10 font-semibold text-3xl md:mt-4" style={{"fontFamily":
                  "Manrope","color":"rgba(255, 255,255, 1)"}}>about.</div>
                  <div className='flex flex-col md:flex-row items-center'>
                    <div className="w-full flex justify-center md:w-1/4 mb-4 md:mb-0">
                        <img className="h-40 md:h-48 w-40 md:w-48 border rounded-full pt-3 bg-red-500" src={Thubmnail} alt={FirstName}/>
                    </div>
                    <div className="w-full text-center md:w-3/4 px-4 md:px-0 my-2 font-extralight text-[1rem] md:text-[1.05rem] leading-6 tracking-wide" style={{"fontFamily":
                    "monospace","color":"rgba(255, 255, 255, 1)"}}>{Description.slice(0,500)}</div>
                    
                  </div>
                  
                </div> 
              </div>
    </div>
  )
}

export default option3;