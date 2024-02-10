import React from 'react';
import flowerImage from "../../images/Vector.png"
import flowerImage2 from "../../images/Vector2.png"
import HalfStar from "../../images/half_star.png"

const option1 = (props) => {
    const { FirstName, LastName, Thubmnail, Keywords, Description, Email, Colour, Address} = props;
    console.log(props)
  return (
        <div>
            <div className="h-screen w-full absolute left-0 top-0 bg-black">
              <div className="h-[100vh] w-full flex flex-col justify-center items-center" >
                  <div className="text-[4.5rem] text-center md:text-8xl my-2 flex gap-4 leading-none" style={{"fontFamily":"roboto","color":"rgba(255, 255, 255, 1)"}}>
                    <span className="font-semibold md:font-bold uppercase tracking-normal">{FirstName}</span>
                    <span className="font-semibold md:font-bold uppercase tracking-normal">{LastName}</span>
                  </div>
                  <p className="text-center text-3xl font-norma uppercase" style={{"fontFamily":"roboto","color":"rgba(255, 255, 255, 1)"}}>{Keywords}</p>  
                  <div className="mt-10 flex">
                        <a href="#touch" className='px-5 py-2 rounded-xl mr-2 cursor-pointer hover:opacity-90 hover:text-white border' style={{"color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(28, 28, 28, 1)","borderColor":"rgba(255, 255, 255, 1)"}}>Contact</a>
                        <div className='px-5 py-2 rounded-xl border ml-2 cursor-pointer hover:opacity-90' style={{"backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(57, 57, 57, 1)"}}>Resume</div>
                </div>              
              </div>
            </div>

              <div className="absolute top-[100vh] left-0 bg-black w-full text-xl h-screen p-4 md:p-80 flex flex-col md:flex-row justify-start" id="about">
                <div className="w-full pt-16 md:pt-20 md:px-24 flex flex-col">
                  <div className="mb-5 md:mb-10 font-semibold text-3xl md:mt-4" style={{"fontFamily":
                  "Manrope","color":"rgba(255, 255,255, 1)"}}>about.</div>
                  <div className='flex items-center'>
                    <div className="w-1/4">
                        <img className="h-48 w-48 border rounded-full pt-3 bg-red-500" src={Thubmnail} alt={FirstName}/>
                    </div>
                    <div className="w-3/4 my-2 font-extralight text-[1.05rem] leading-6 tracking-wide" style={{"fontFamily":
                    "monospace","color":"rgba(255, 255, 255, 1)"}}>{Description.slice(0,300)}</div>
                    
                  </div>
                  
                </div> 
              </div>
    </div>
  )
}

export default option1