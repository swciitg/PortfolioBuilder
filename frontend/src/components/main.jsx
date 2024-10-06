import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewCard from './newCard';

const HomePage = () => {
    const [searchParams] = useSearchParams();

    // Fetch user information from localStorage or using the provided code
    const getItem = async () => {
        const code = searchParams.get('code');  

        if (localStorage.getItem('studName') === null && code) {
            await getToken(code);
        }
    }

    useEffect(() => {
        getItem();
        document.body.classList.add("disable-scrolling");
    }, []);

    // Function to handle user logout
    const logOutHandler = async () => 
    {
        localStorage.clear('studName', 'studId', 'studRoll', 'studJob');
        await logOut();
    }

    return (
        <div className='h-full'>
            <div className='w-full h-1/3 bg-gray-900'>
                <div className='w-full h-fit text-white'>
                    <div className='flex justify-end items-center mr-4'>
                        {/* <Link className='mx-3 text-lg flex items-center' to="">
                            <span className="material-symbols-outlined">
                                info
                            </span>
                            <span className='ml-1 hover:underline'>Feedback</span>
                        </Link> */}
                        <button className='cursor-pointer text-white py-2 rounded-md my-2 mx-3 text-lg' onClick={logOutHandler}>
                            <div className='flex items-center'>
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                                <span className='hover:underline ml-1'>Log Out</span>
                            </div>
                        </button>
                    </div>
                    <div className='py-6 px-8' style={{ fontFamily: "Raleway" }}>
                        <div className='text-3xl font-extrabold p-1'>Welcome Ankit Gurwan 👋</div>
                        <div className='text-2xl font-medium px-1 pt-1'>Mechanical Engineering</div>
                        <div className='text-2xl font-medium px-1 pb-2'>210103016</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-2/3 px-10 pt-10 pb-28 bg-gray-200'>
                <div className='text-xl font-medium text-gray-800 mb-8 flex items-center'>
                    <span className="material-symbols-outlined">
                        history
                    </span>
                    <span className='ml-1 text-xl'>New Activity:</span>
                </div>
                <div className='flex gap-4'>
                    <NewCard />
                </div>
            </div>
        </div>
    )
}

export default HomePage;