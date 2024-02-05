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
        <div className=" w-full z-10 bg-gray-200 text-gray-800 py-1 flex items-center justify-between px-4">
            <div className="flex items-center">
                <div className=''> <img className='h-10 w-10 mr-2' src={img5} alt='swc-logo'></img></div>
                <div className="text-2xl mr-1 tracking-tight font-semibold">Portfolio Builder</div>
                <div className="text-xs mb-2">Product by SWC</div>
            </div>
            <div className="flex items-center tracking-tight font-medium">
                <Link className='mx-3 text-lg flex items-center' to="/main">
                    <span class="material-symbols-outlined">
                    home
                    </span>
                    <span className='ml-1 hover:underline '>Home</span>
                </Link>
                <Link className='mx-3 text-lg flex items-center' to="">
                    <span class="material-symbols-outlined">
                    info
                    </span>
                    <span className='ml-1 hover:underline '>Feedback</span>
                </Link>
                <button className='cursor-pointer py-2 rounded-md my-2 mx-3 text-xl ' onClick={logOutHandler}>
                    <div className='flex items-center'>
                    <span class="material-symbols-outlined">
                    person
                    </span>
                    <span className='hover:underline ml-1'>Log Out</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default Header;