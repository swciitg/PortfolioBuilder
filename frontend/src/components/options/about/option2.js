import React from 'react';
import HalfStar from "../../images/half_star.png";

const Option2 = (props) => {
    const { FirstName, LastName, Thubmnail, Keywords, Description, Address, URL } = props;
    return (
        <div>
            <div className="h-screen w-full absolute left-0 top-0 flex flex-col md:flex-row">
                <div className="md:h-[100vh] w-full md:w-1/2 pl-8 md:pl-28 pt-28 md:pt-40 flex flex-col">
                    <div className="text-[2.5rem] md:text-6xl mt-1 flex flex-col leading-none mb-2 md:mb-4" style={{ fontFamily: "roboto" }}>
                        <span className="font-medium uppercase tracking-tight" style={{ color: "rgba(57, 57, 57, 1)" }}>{FirstName}</span>
                        <span className="font-medium uppercase tracking-tight" style={{ color: "rgba(147, 147, 147, 1)" }}>{LastName}</span>
                    </div>
                    <p className="text-start text-lg md:text-xl font-medium capitalize tracking-wide" style={{ fontFamily: "Manrope", color: "rgba(57, 57, 57, 1)" }}>{Keywords}</p>
                    <p className="text-start text-sm font-medium capitalize tracking-wide flex items-center" style={{ fontFamily: "Manrope", color: "rgba(57, 57, 57, 1)" }}>
                        <span className="material-symbols-outlined text-sm md:text-lg mr-1">location_on</span>
                        <span>{Address}</span>
                    </p>
                    <div className="mt-4 md:mt-10 flex gap-2">
                        <a href="#touch" className="w-fit px-5 py-2 rounded-xl mr-2 cursor-pointer hover:opacity-80" style={{ color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(57, 57, 57, 1)" }}>Contact</a>
                        <a href={URL}  target="_blank" className="w-fit px-5 py-2 rounded-xl border ml-0 md:ml-2 cursor-pointer hover:opacity-80" style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "rgba(57, 57, 57, 1)" }}>Resume</a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex items-center justify-center md:justify-start pl-0 md:pl-16 relative">
                    <img className="z-10 h-60 md:h-72 w-60 md:w-72 border p-2 rounded-xl md:bg-white" src={Thubmnail} alt={FirstName} />
                    <div className="hidden md:block z-0 absolute top-[9.5rem] right-[13.6rem] h-72 w-72 rounded-xl" style={{ backgroundColor: "rgba(57, 57, 57, 1)" }}></div>
                </div>
            </div>

            {/* About */}
            <div className="absolute top-[100vh] left-0 w-full text-xl h-screen p-4 md:p-80 flex flex-col md:flex-row justify-start" id="about" style={{ backgroundColor: "rgba(57, 57, 57, 1)", color: "rgba(255, 255, 255, 1)" }}>
                <div className="w-full pt-16 md:pt-20 md:px-24 flex flex-col">
                    <div className="mb-3 md:mb-6 font-bold text-4xl" style={{ fontFamily: "Manrope", color: "rgba(255, 247, 233, 1)" }}>About</div>
                    <div className="my-2 font-light text-[1rem] leading-6 tracking-wide text-3xl" style={{ fontFamily: "Manrope", color: "rgba(255, 247, 233, 0.9)" }}>{Description}</div>
                    <div className="hidden md:block absolute left-0 bottom-60 md:bottom-36 h-16 w-16">
                        <img src={HalfStar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Option2;