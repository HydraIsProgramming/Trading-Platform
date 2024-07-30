import React from 'react'
import Portfolio from './Portfolio'
import Watchlist from './Watchlist'

function Summary() {
  return (
    <div className= "text-gray-800 flex p-[20px] flex-col h-[140vh] items-center">
      <div className= "h-full bg-gray-200">
        <Portfolio/>
        {/* maybe make below more styled */}
        {/* also find out why the margin is uneven */}
        <hr className="border-t-4 my-[15px] border-gray-400"/>
        <Watchlist/>
      </div>
    </div>
  )
}

export default Summary