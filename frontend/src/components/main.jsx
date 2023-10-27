import React , { useContext,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import { useSearchParams } from 'react-router-dom';
import Card from './navigateCard';

const HomePage = () => {
    const { getToken , logOut ,studInfo ,setStudInfo} = useContext(AuthContext);
    const [ searchParams,setSearchParams ] = useSearchParams();
    
    const Navigate = useNavigate();


    const getItem = async () => {
        const code = searchParams.get('code');  

        if(localStorage.getItem('studName') === null && code)
          await getToken(code);

    }

    useEffect(()=>{
        getItem();
        document.body.classList.add("disable-scrolling");
    },[]);

    setStudInfo({...studInfo, name : localStorage.getItem('studName'), roll : localStorage.getItem('studRoll') , email : localStorage.getItem('studId')});

    const clickHandler = async () => {
        Navigate('/portfolio')
    }

    

    const logOutHandler = async () => {
        localStorage.clear('studName','studId','studRoll','studJob');
        await logOut();
    }

    return (
        <div>
            <div className='w-full'>
            <div className='w-full bg-black text-white'>
  <div className='flex justify-between items-center p-4'>
    <div>
      <div className='text-3xl font-bold p-1'>Welcome {"Aryan"} 👋</div>
      <div className='text-2xl font-semibold px-1'>{"220101018"}</div>
    </div>
    <div className='text-right'>
      <button className='bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800' onClick={logOutHandler}>
        Log Out
      </button>
    </div>
  </div>
</div>

                <div className='my-12 mx-12 '>
                    <div onClick={clickHandler}>
                    <Card />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;