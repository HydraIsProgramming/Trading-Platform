import React from 'react'
import NavBar from '../components/NavBar'
import PortfolioSummary from '../components/Portfolio'
import Watchlist from '../components/Watchlist'
import Summary from '../components/Summary'

function Homepage() {
  return (
    <div className = "flex flex-col">
      <div className = "h-[135px]">
      <NavBar/>
      </div>
      <Summary/>
    </div>
  )
}

export default Homepage