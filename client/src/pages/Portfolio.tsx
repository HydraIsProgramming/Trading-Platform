import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Switch from "react-switch"
import "../styles/portfolio.css"

function Portfolio() {
  const [toggleValue, setToggleValue] = useState(false);

  const handleChange = () => {
    setToggleValue(!toggleValue)
  }

  const rows = Array.from({ length: 20 }, (_, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">2</td>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">Sell</td>
      <td className="border border-gray-300 text-gray-900 px-4 py-2">2024-07-06</td>
    </tr>
  ));

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-[135px]">
        <NavBar />
      </div>
      <div className="mt-[50px] mb-[50px] flex justify-center space-x-[170px] text-center">
        <form className="flex flex-col content-center self-center pl-[200px] space-y-14 mb-[200px]">
          <div className="flex flex-col space-y-10 mb-[150px]">
            <label className="text-4xl text-gray-900">Symbol Name</label>
            <input className="w-[250px] h-[30px] border border-gray-300 rounded px-2" />

            <div className="flex items-center space-x-3">
              <label className="text-gray-900">Action (Buy/Sell)</label>
              <Switch
                width={105}
                height={40}
                uncheckedHandleIcon={<h2>Buy</h2>}
                checkedHandleIcon={<h2>Sell</h2>}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor='#00bfff'
                onColor='#FF9E0D'
                onChange={handleChange}
                checked={toggleValue}
              />
            </div>
          </div>
        </form>

        <div className="grow">
          <table className="w-11/12 border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Order Type</th>
                <th className="border border-gray-300 px-4 py-2">Time in force</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
