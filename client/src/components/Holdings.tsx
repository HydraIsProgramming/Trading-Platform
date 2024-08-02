import React, { useState, useEffect } from 'react'
import axios from "axios";

function Holdings() {
  const [settledCash, setSettledCash] = useState(100);
  const [userStockSymbols, setUserStockSymbols] = useState(["AAPL", "AMZN"]);
  const [userStockData, setUserStockData] = useState<any[][]>([]);

    useEffect(() => {
      const data_to_add: any = []

      const getData = async () => {
        for (let symbol of userStockSymbols) {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/portfolio/holding?stock_name=${symbol}`)
            const modified = Object.assign({symbol}, response.data)
            data_to_add.push([modified])
          } catch (error) {
            console.log(error)
          }
        } 
        setUserStockData(data_to_add)
      }

      getData()
       
    }, [userStockSymbols])
  
  return (
    <div className="flex flex-col h-[140vh] items-center ">
          <div className="h-full m-[40px] w-[1300px] bg-gray-200">

            <div className = "w-full p-4">
                <table className = "w-full border-collapse ">
                    <thead>
                        <tr>
                            {/* make this look prettier and better done (the "your holding") */}
                              <th className= "text-4xl text-blue-700 text-left">Your Holding</th>
                              <th className= "border border-black bg-gray-500">Last</th>
                              <th className="border text-sm border-black bg-gray-500">Change %</th>
                              <th className="border border-black bg-gray-500">Position</th>
                              <th className="border border-black bg-gray-500">Cost Basis</th>
                              <th className="border border-black bg-gray-500">Market Value</th>
                              <th className="border border-black bg-gray-500">Unrealized Profit Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                      {userStockData.map((array) => (
                          <tr>
                            {array.map((value) => (
                              Object.values(value).map((object_value: any) => (
                                <td className="border border-black text-xl text-left p-1">{object_value}</td>
                            ))
                        ))}
                        </tr>
                      ))}
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