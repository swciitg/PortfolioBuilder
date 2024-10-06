import React from 'react';
import flowerImage from "../../images/Vector.png";
import flowerImage2 from "../../images/Vector2.png";
import HalfStar from "../../images/half_star.png";
import Scratch from "../../images/sratch.png";
import Arrow from "../../images/arrow.png";

const Option1 = (props) => {
  const {
    FirstName,
    LastName,
    Thubmnail,
    Keywords,
    Description,
    URL
  } = props;


  return (
    <div>
      <div className="h-screen w-full absolute left-0 top-0 bg-black">
        <span className="absolute right-20 md:right-24 bottom-24">
          <img className="h-20 w-20" src={flowerImage2} alt="flower" />
        </span>
        <span className="absolute right-4 md:right-4 bottom-40 md:bottom-36">
          <img className="h-12 w-12" src={flowerImage2} />
        </span>
        <div
          className="h-[100vh] absolute top-48 md:top-40 left-0 w-full pl-4 md:pl-32"
        >
          <div
            className="text-4xl font-semibold flex gap-3 my-2 md:my-0 items-center"
            style={{ fontFamily: "roboto", color: "rgba(255, 247, 233, 0.6)" }}
          >
            <span>Hi, I am</span>
            <span>
              <img className="h-9 w-9" src={flowerImage} />
            </span>
          </div>
          <div
            className="text-[5rem] md:text-9xl mt-1 flex flex-col md:flex-row md:gap-6 leading-none"
            style={{ fontFamily: "roboto", color: "rgba(255, 247, 233, 1)" }}
          >
            <span className="font-semibold md:font-bold uppercase tracking-tight">
              {FirstName}
            </span>
            <span className="font-semibold md:font-bold uppercase tracking-tight">
              {LastName}
            </span>
          </div>
          <p
            className="text-end text-2xl font-semibold capitalize pt-8 md:mr-32"
            style={{ fontFamily: "roboto", color: "rgba(255, 247, 233, 0.6)" }}
          >
            {Keywords}
          </p>

          <div className="mt-4 md:mt-10 flex gap-2">
            <a href="#touch" className="w-fit px-5 py-2 rounded-xl mr-2 cursor-pointer hover:opacity-80" style={{ color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(57, 57, 57, 1)" }}>Contact</a>
            <a href={URL}  target="_blank" className="w-fit px-5 py-2 rounded-xl border ml-0 md:ml-2 cursor-pointer hover:opacity-80" style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "rgba(57, 57, 57, 1)" }}>Resume</a>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[100vh] bg-black left-0 w-full text-xl h-screen p-4 md:p-80 flex flex-col md:flex-row justify-start"
        id="about"
      >
        <div className="w-full md:w-1/2 pt-16 md:pt-20 md:px-24 flex flex-col">
          <div
            className="mb-1 md:mb-3 font-semibold text-3xl"
            style={{ fontFamily: "Roboto", color: "rgba(255, 247, 233, 1)" }}
          >
            About
          </div>
          <div
            className="my-2 pt-3 md:pt-6 font-extralight text-[1.05rem] leading-6 tracking-normal md:tracking-wide text-md md:text-xl"
            style={{ fontFamily: "Roboto", color: "rgba(255, 247, 233, 0.9)" }}
          >
            {Description.slice(0, 500)}
          </div>
          <div className="absolute left-0 bottom-60 md:bottom-36 h-16 md:h-20 w-16 md:w-20">
            <img src={HalfStar} />
          </div>
        </div>

        <div className="relative h-fit my-auto p-2 md:p-4 border border-red-700 ml-32 md:ml-20 rounded-xl flex items-center">
          <img className="h-72 w-80 md:w-72" src={Thubmnail} alt={FirstName} />
          <div className="absolute -left-16 -bottom-24 md:-bottom-32 h-40 w-36 md:w-40">
            <img src={Arrow} alt="arrow" />
          </div>
          <div
            className="absolute -left-[5.7rem] md:-left-[5.5rem] -bottom-[3rem] md:-bottom-20 h-36 md:h-40 w-36 md:w-40 -rotate-[33deg] text-2xl"
            style={{ fontFamily: "Roboto", color: "rgba(255, 247, 233, 1)" }}
          >
            me
          </div>
          <div className="absolute -left-32 md:-left-32 -bottom-[4.5rem] md:-bottom-[6.3rem] h-32 w-32 -rotate-6">
            <img src={Scratch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option1;