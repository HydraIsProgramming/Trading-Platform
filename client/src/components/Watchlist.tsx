import React from 'react'

function Watchlist() {
  return (
    <div className= "flex-1 h-[500px] grow flex flex-col">
      <div className = "mb-[5px] w-[450px] flex items-center flex-col">
        <h1 className = "text-5xl">Watchlist</h1>
      </div>

      <div className="w-full p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-500">Name</th>
              <th className="border p-2 bg-gray-500">Last</th>
              <th className="border p-2 bg-gray-500">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center bg-gray-300 p-2">Yahoo</td>
              <td className="border text-center bg-gray-300 p-2">2024-07-05</td>
              <td className="border text-center bg-gray-300 p-2">-57%</td>
            </tr>

            <tr>
              <td className="border text-center bg-gray-300 p-2">Yahoo</td>
              <td className="border text-center bg-gray-300 p-2">2024-07-05</td>
              <td className="border text-center bg-gray-300 p-2">-57%</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Watchlist