import React, { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";
import img5 from '.././images/swc.png'

const Header = () => {
    const { logOut} = useContext(AuthContext);

    const logOutHandler = async () => {
        localStorage.clear('studName','studId','studRoll','studJob');
        await logOut();
    }

    return(
        <div className="w-full z-10 bg-gray-200 text-gray-800 py-2 md:py-1 flex items-center justify-between px-2 md:px-4">
            <div className="flex items-center">
                <div className=''> <img className='h-8 md:h-10 w-8 md:w-10 mr-6 md:mr-2' src={img5} alt='swc-logo'></img></div>
                <div className="text-lg md:text-2xl mr-1 tracking-tight font-medium md:font-semibold leading-5">Portfolio Builder</div>
                <div className="hidden md:block text-xs mb-2">Product by SWC</div>
            </div>
            <div className="flex items-center tracking-tight font-medium">
                <Link className='mx-1 md:mx-3 flex items-center text-sm md:text-lg' to="/main">
                    <span class="material-symbols-outlined text-lg md:text-2xl">
                    home
                    </span>
                    <span className='mx-1 hover:underline'>Home</span>
                </Link>
                <Link className='mx-1 md:mx-3 flex items-center text-sm md:text-lg' to="">
                    <span class="material-symbols-outlined text-lg md:text-2xl">
                    info
                    </span>
                    <span className='md:mx-1 hover:underline '>Feedback</span>
                </Link>
                <button className='cursor-pointer py-2 rounded-md my-2 mx-1 md:mx-3 text-sm md:text-xl ' onClick={logOutHandler}>
                    <div className='flex items-center'>
                    <span class="material-symbols-outlined text-lg md:text-2xl">
                    person
                    </span>
                    <span className='hover:underline md:mx-1'>LogOut</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default Header;