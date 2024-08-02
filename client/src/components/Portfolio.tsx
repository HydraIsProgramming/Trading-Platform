import React, { useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md"
import axios from "axios"

function Portfolio() {
  // true is on, false is off meaning dividends will be on instead
  const [buyingPowerDisplayed, setBuyingPowerDisplayed] = useState(true)
  const [settledCash, setSettledCash] = useState(100);
  const [accountNumber] = useState(100328742492);



  return (
    <div className= "bg-gray-200 h-auto flex-1 w-[1300px] flex justify-between">
      <div className = "flex justify-center items-center flex-col grow">
        <div className= "relative inset-y-[-150px]">
          <h1 className= "text-5xl">Portfolio</h1>
        </div>
        <div className = "space-y-7">
          <p className = "text-2xl  flex">Account #: {accountNumber}</p>
          <p className="text-2xl flex">Settled Cash: ${settledCash} USD</p>
        </div>
      </div>
      
      <div className= "h-[500px] w-[850px]">
        <img className= "h-[500px] w-[850px]" src= "https://www.geogebra.org/resource/bYKdFABj/zWQ2Uf2SNlM5MHGI/material-bYKdFABj.png"/>
      </div>
    </div>
  )
}

export default Portfolio