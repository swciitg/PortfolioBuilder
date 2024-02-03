import React from 'react'
import { useNavigate } from 'react-router-dom';

const PortfolioCard = () => {
    const Navigate = useNavigate();

    const clickHandler = async () => {
        Navigate('/portfolio')
    }

  return (
      <div className='border border-gray-300 w-48 h-40 text-gray-800 rounded-lg bg-gray-100 hover:scale-[1.02] cursor-pointer flex items-center justify-center' onClick={clickHandler}>
            <span class="material-symbols-outlined text-5xl">
            add_circle
            </span>
      </div>
  )
}

export default PortfolioCard;