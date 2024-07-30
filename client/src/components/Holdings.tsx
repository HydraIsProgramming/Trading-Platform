import React, { useState, useEffect } from 'react'
import axios from "axios";

function Holdings() {
  const [settledCash, setSettledCash] = useState(100);
  const [userStockSymbols, getUserStockSymbols] = useState(["AAPL"]);

  const getData = async () => {
    const link = "http://127.0.0.1:5000/"
    try {
      const requests = userStockSymbols.map(
        name => {
          axios.get(`${link}/research/price?stock_name=${name}`)
        }
      )
    } catch {
      console.log("")
    }
  }


  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:5000/research/price?stock_name=AAPL`,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    //   <div className="h-full bg-blue-400 flex-1 w-[1300px] flex  justify-between">
    // <div className = "bg-blue-400 h-[110vh]">
    <div className="flex flex-col h-[140vh] items-center ">
          <div className="h-full m-[40px] w-[1300px] bg-gray-200">

            <div className = "w-full p-4">
                <table className = "w-full border-collapse ">
                    <thead>
                        <tr>
                            {/* make this look prettier and better done (the "your holding") */}
                              <th className= "text-4xl text-blue-700 text-left">Your Holding        <span className = "bg-blue-400 ml-[20px] absolute text-sm">Net Liqudity</span></th>
                              <th className= "border border-black bg-gray-500">Last</th>
                              <th className="border text-sm border-black bg-gray-500">Change %</th>
                              <th className="border border-black bg-gray-500">Position</th>
                              <th className="border border-black bg-gray-500">Avg<br/> Price</th>
                              <th className="border border-black bg-gray-500">Cost Basis</th>
                              <th className="border border-black bg-gray-500">Market Value</th>
                              <th className="border border-black bg-gray-500">Unrealized Profit Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black text-xl text-left p-1">Yahoo</td>
                              <td className="border border-black bg-gray-300 text-center">25</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                <td className="border border-black bg-gray-300 text-center">-557%</td>
                <td className="border border-black bg-gray-300 text-center">-227%</td>
                <td className="border border-black bg-gray-300 text-center">-357%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className = "relative bottom-[18px]">
            <h1 className= "border-b-2 border-black text-3xl">Remaining Cash = ${settledCash} USD</h1>
        </div>
    </div>
  )
}

export default Holdings