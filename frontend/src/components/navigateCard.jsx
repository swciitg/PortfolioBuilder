import React from 'react'

function portfolioCard() {
  return (
    <div>
        <div class="border-2 w-44 h-32 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-50 flex flex-col" >
            <div class="flex justify-center items-center py-2 text-lg font-semibold">Topic Name</div>
            <hr/>
            <div class="flex justify-center items-center py-4">Description</div>
        </div>
    </div>
  )
}

export default portfolioCard;