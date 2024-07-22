import React, { useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md"

function Portfolio() {
  // true is on, false is off meaning dividends will be on instead
  const [buyingPowerDisplayed, setBuyingPowerDisplayed] = useState(true)

  const toggleBuyingPower = () => {
    setBuyingPowerDisplayed(!buyingPowerDisplayed)
  }

  return (
    <div className= "bg-gray-200 h-auto flex-1 w-[1300px] flex justify-between">

      <div className = "flex justify-center items-center flex-col grow">
        <div className= "relative inset-y-[-150px]">
          <h1 className= "text-5xl">Portfolio</h1>
        </div>
        {buyingPowerDisplayed ? (
        <div className = "space-y-7">
          <div className = "flex items-center  space-x-4">
            <button className = "text-2xl  flex">Buying Power</button>
            <MdKeyboardBackspace size={25} />
          </div>
          <button onClick={toggleBuyingPower} className= "text-2xl hover:text-orange-400 flex">Dividends</button>
        </div>) : (
          <div className = "space-y-7">
            <button onClick={toggleBuyingPower} className = "text-2xl hover:text-orange-400 flex">Buying Power</button>
            <div className = "flex items-center space-x-4">
              <button className= "text-2xl text-white flex">Dividends</button>
              <MdKeyboardBackspace size = {25}/>
            </div>
          </div>
        )}
      </div>
      
      <div className= "h-[500px] w-[850px]">
        <img className= "h-[500px] w-[850px]" src= "https://www.geogebra.org/resource/bYKdFABj/zWQ2Uf2SNlM5MHGI/material-bYKdFABj.png"/>
      </div>
    </div>
  )
}

export default Portfolio