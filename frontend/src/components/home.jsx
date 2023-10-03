import React, { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';
import './home.css'
import img1 from './images/one.png'
import img2 from './images/two.png'
import img3 from './images/three.png'
import img4 from './images/four.png'
import img5 from './images/swc.png'
import img6 from './images/Microsoft.png'
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
                </div>
                {/* <button id='btn-login' className='btn-primary'><img src={img6} /><p>Click Me</p>  </button> */}
                <button className="button-home" onClick={clickHandler}>
                <img className='img-btn' src={img6} />Login With Microsoft</button>
                 
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