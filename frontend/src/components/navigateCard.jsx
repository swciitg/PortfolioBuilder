import React from 'react';
import { useNavigate } from 'react-router-dom';


const PortfolioCard = () => {
    const Navigate = useNavigate();

      const clickHandler = async () => {
          Navigate('/portfolio')
      }

    return (
        <div className='text-gray-800' onClick={clickHandler}>
          <div class="border border-gray-300 w-48 h-40 rounded-lg bg-white cursor-pointer  flex-col" >
            <div className='text-end text-xs p-1 bg-gray-100 rounded-t-lg' style={{"fontFamily":"Raleway"}}>29-Nov-2023</div>
            <div class="flex justify-center items-center pt-4 tracking-tight">Ankit Gurwan</div>
            <div class="flex justify-center items-center tracking-tight">Id - 19281991</div>
            <button className='w-full mt-8 bg-gray-500 py-2 px-6 rounded-b-lg text-white font-semibold hover:bg-gray-600'>Edit</button>
          </div>
        </div>
    )
}

export default PortfolioCard;