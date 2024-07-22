import React from 'react'

function Holdings() {
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
                              <th className= "text-4xl text-blue-700 text-left">Your Holding</th>
                        <th className= "border border-black bg-gray-500">Net <br/> Liquidity</th>
                              <th className="border border-black bg-gray-500">Buying<br/> Power</th>
                              <th className="border border-black bg-gray-500">Daily<br/> PandL</th>
                              <th className="border border-black bg-gray-500">Unrealized<br/> PandL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black text-xl text-left p-1">Yahoo</td>
                              <td className="border border-black bg-gray-300 text-center">25</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                              <td className="border border-black bg-gray-300 text-center">-57%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className = "relative bottom-[18px]">
              <h1 className= "border-b-2 border-black text-3xl">Remaining Cash = $52 USD</h1>
        </div>
    </div>
  )
}

export default Holdings