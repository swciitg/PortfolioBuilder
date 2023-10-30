import React, { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';
import './home.css'
import img1 from './images/one.png'
import img2 from './images/two.png'
import img3 from './images/three.png'
import img4 from './images/four.png'
import img5 from './images/swc.png'
const HomePage = () => {

    const { userLogin } = useContext(AuthContext);

    const clickHandler = async () => {
        await userLogin();
    }

    return (
        <div className="main">
        <div className=" main_part">
            <div className="header">
                <div className='swc-img'> <img src={img5}></img></div>
                <div className="heading">
                    <p>Student web commitee - IIT Guwahati</p>
                </div>
                
            </div>
            <div className='bottom-part'>
                <div className="landing_page" >
                    <p className="head-one" >PortFolio Builder</p>
                    <p className="head-two">Build portfolio with ease</p>
                    <div
                        class = "w-full h-12 mt-4 px-2 text-white flex justify-center items-center rounded-md cursor-pointer font-medium"
                        style={{"background-color": "#3b5998"}}
                        onClick={clickHandler}>
                        <i class="fa-brands fa-windows text-2xl p-2 my-auto mx-2"></i>
                        Continue with Microsoft
                    </div>
                </div>
                 
            </div>
        </div>
        <div className="anot">
            <div className="part1" >
               <div className="img_three" ><img  src={img3} ></img></div> 
                <div className="img-four" ><img src={img4} ></img></div>
            </div>
            <div className=" part2">
              <div className="img-one"> <img  src={img1}></img></div>
              <div className="img-two"> <img  src={img2}></img></div>
            </div>
        </div>
    </div>
    )
}

export default HomePage;