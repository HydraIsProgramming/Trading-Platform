import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Switch from "react-switch"
import { MdOutlineSearch } from "react-icons/md";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Trade() {
  const [toggleSell, setToggleSell] = useState(false);
  const [quantityCount, setQuantityCount] = useState(0);
  const [orderType, setOrderType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPrice, setSearchPrice] = useState(48.00);
  const [searchPriceChange, setSearchPriceChange] = useState(0.34);
  const [searchPriceChangePercentage, setSearchPriceChangePercentage] = useState(0.70);

  const handleActionClick = () => {
    setToggleSell(!toggleSell)
  }

  const increaseQuantity = () => {
    setQuantityCount(quantityCount + 1)
  }

  const decreaseQuantity = () => {
    if(quantityCount > 0) {
      setQuantityCount(quantityCount - 1)
    } 
  }

  const handleOrderType = (event: any) => {
    setOrderType(event.target.value)
  }

  const handleQuery = (event: any) => {
    setSearchQuery(event.target.value)
  }

  const rows = Array.from({ length: 20 }, (_, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">2</td>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">Sell</td>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">2024-07-06</td>
    </tr>
  ));

  return (
    <div className="bg-gray-100">
      <div className="h-[135px]">
        <NavBar />
      </div>
      
      <div className="mt-[30px] flex-col mb-[50px] flex">

        <form className="flex">
          <div className="flex flex-col space-y-5 mb-[50px]">

            <div className = "space-x-2 ml-[60px] flex-row flex items-center ">
              <label className="text-lg text-gray-900">Symbol</label>
              <input onChange={handleQuery} className="w-[150px] h-[30px] border border-gray-300 rounded px-2" />
              {
              searchQuery == "IXIC" ? 
              <div className="flex">
                <h1 className="text-5xl ml-[10px]">{searchPrice}</h1>
                <h4 className="text-lg self-end ml-[3px] text-green-500">{searchPriceChange} {(searchPriceChangePercentage).toFixed(2) + "%"}</h4>
                  </div> :  <div className="flex"></div>
              }
            </div>

            <div className="flex ml-[20px] flex-col items-center space-x-3">

              <table className= "text-left">
                <tr className= "">
                  <th className= "px-10 py-2">
                  Action
                </th>
                  <th className="px-10 py-2">
                  Quantity
                </th>
                <th className="px-10 py-2">
                  Order Type
                </th>
                  <th className="px-10 py-2">
                    Time enforced
                  </th>
              </tr>

              <tr>
                <td className='px-10 py-2'>
                    <button onClick={handleActionClick} className={toggleSell ? "bg-blue-400 rounded px-2 py-2 transition duration-500 ease-in-out" : "rounded px-2 py-2"} type="button">Buy</button>
                    <button onClick={handleActionClick} className={toggleSell ? "rounded px-2 py-2" : "bg-red-400 rounded px-2 py-2 transition duration-500 ease-in-out"} type="button">Sell</button>
                </td>
                <td className='px-10 py-2'>
                    <div className = "bg-green-400 w-[135px] flex justify-between items-center">
                      <p className = "text-xl">{quantityCount}</p>
                      <div className = "space-x-0">
                        <button onClick={increaseQuantity} className="px-[5px] text-2xl py-2" type="button">+</button>
                        <button onClick={decreaseQuantity} className="px-[5px] text-2xl py-2"  type="button">-</button>
                      </div>
                    </div>
                </td>
                <td className='px-10 py-2 w-[250px]'>
                    <FormControl fullWidth>
                      <Select
                      value = {orderType}
                      onChange = {handleOrderType}
                      >
                        <MenuItem value = "Market">Market</MenuItem>
                        <MenuItem value="Limit">Limit</MenuItem>
                      </Select>
                    </FormControl>
                </td>
                  <td className='px-10 py-2 w-[250px]'>
                    <FormControl fullWidth>
                      <Select
                        value={orderType} 
                        // fix this
                        onChange={handleOrderType}
                      >
                        <MenuItem value="Open">Open</MenuItem>
                        <MenuItem value="Close">Close</MenuItem>
                        <MenuItem value="Cancel">Good till cancel</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                {/* fix later */}
                <td className='px-5 py-2'>
                  <button type="submit" className="self-end mt-auto bg-blue-500 w-[80px] h-[30px] rounded items-center">Submit</button>
                </td>
              </tr>
            </table>

            </div>
          </div>
        </form>

        {searchQuery == "IXIC" ? 
          <div className=" ml-[60px] flex h-[450px] w-[1050px]">
            {/* will be fully name later */}
            <h3 className="text-lg ml-[20px] mt-[10px] absolute">NASDAQ ENTERPRISES</h3><h2 className="mt-[32px] absolute ml-[20px]"> O<span className="text-sm text-red-600">48600</span> H<span className="text-sm text-red-600">48600</span> L<span className="text-sm text-red-600">48600</span> C<span className="text-sm text-red-600">48600</span></h2>
            <img className="h-[450px] w-[1050px]" src="https://www.geogebra.org/resource/bYKdFABj/zWQ2Uf2SNlM5MHGI/material-bYKdFABj.png" />
          </div>
        : ""}
  
      </div>
    </div>
  )
}

export default Trade
