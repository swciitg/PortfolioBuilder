import React, { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';

const HomePage = () => {

    const { userLogin } = useContext(AuthContext);

    const clickHandler = async () => {
        await userLogin();
    }

    return (
        <div
            className="bg-cover bg-center h-screen "
            style={{
                backgroundImage: `url('https://static.theprint.in/wp-content/uploads/2023/07/IITG-1.jpg')`,
            }}
        >
            <div className='h-full flex flex-col justify-center items-center backdrop-brightness-50'>
                <div className='text-white font-bold text-3xl pb-6'>
                    Portfolio Builder
                </div>

                <div className='py-2 px-7 flex border-2 border-white rounded-md text-white font-medium text-xl cursor-pointer hover:text' onClick={clickHandler}>
                    <i class="fa-brands fa-windows text-2xl pr-3 my-auto py-auto"></i>
                    <div className='py-auto text-xl'>Log In</div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;