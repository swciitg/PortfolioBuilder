import React from 'react';
import './home.css'
import img2 from './images/imagefinal2.jpg'
import img5 from './images/portfolio_logo.png'

const HomePage = () => {

    const clickHandler = async () => {
    }

    return (
        <div className="bg-gray-200 flex flex-col md:flex-row h-fit md:h-full">
            <div className="md:w-[45%] px-4 md:px-20 pt-8 md:pt-32">
                <div className="flex items-center text-2xl font-extrabold text-blue-950 tracking-tight" style={{"fontFamily":"Raleway"}}>
                    <div className=''> <img className='h-12 md:h-16 w-12 md:w-16' src={img5} alt='swc-logo'></img></div>
                    <div className="px-2 md:px-4">
                        <p>Student Web Commitee -</p>
                        <p>IIT Guwahati</p>
                    </div>
                    
                </div>
                <div className='py-12 text-gray-900'  style={{"fontFamily":"Raleway"}}>
                        <p className="text-2xl font-semibold uppercase py-2 text-gray-900">PortFolio Builder</p>
                        <p className="py-2 text-lg text-gray-800 leading-5">Welcome to PortfolioProBuilder, where your professional journey takes center stage. </p>
                        <div
                            class = "w-3/4 md:w-2/3 h-12 mt-8 text-white hover:opacity-80  flex justify-center items-center rounded-md cursor-pointer font-medium"
                            style={{"background-color": "#3b5998"}}
                            onClick={clickHandler}>
                            <i class="fa-brands fa-windows text-2xl my-auto mx-3"></i>
                            Continue with Microsoft
                    </div>
                    
                </div>
            </div>
            <div className='mx-auto md:mx-8 my-16 md:my-8 md:relative'>
                <img className='md:absolute top-[19rem] left-0 md:left-80 object-cover w-52 h-52 border md:border-none rounded-xl rotate-12 md:rotate-0 ' src="https://crediblesoft.com/wp-content/uploads/2018/09/portfolio-banner.jpg" alt='image4'/>
                <img className='z-10 rounded-xl border  md:absolute top-[12.5rem] left-8 object-fill md:-rotate-12 w-60 md:w-[18rem] h-60 md:h-[18rem]' src={img2} alt='image3'/>
                <img className='ml-0 md:ml-48 object-cover w-60 md:w-[17rem] h-60 md:h-[17rem] z-10 border md:border-none border-violet-400 rounded-xl' src="https://thumbs.dreamstime.com/z/portfolio-management-businessman-hologram-concept-futuristic-portfolio-management-businessman-hologram-concept-177205308.jpg" alt='image1'/>
            </div>
        </div>
    )
}

export default HomePage;