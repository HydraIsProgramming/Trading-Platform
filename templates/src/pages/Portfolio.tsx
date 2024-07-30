import React from 'react'
import NavBar from '../components/NavBar'
import Holdings from '../components/Holdings'

function Portfolio() {
    return (
        <div>
            <div className = "h-[135px]">
                <NavBar/>
            </div>
            <Holdings/>
        </div>
    )
}

export default Portfolio