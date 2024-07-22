import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <div className= "bg-white border-2 fixed w-full border-gray-300">
      <div className="flex min-h-[90px] items-center justify-center">
        <div className= "flex items-center grow h-[90px] absolute mr-[1350px] ml-[25px]">
          <img className= "max-h-[65px]" src= "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png"/>
        </div>
        <SearchBar/>
        </div>

      <div className= "flex justify-center py-2 space-x-[350px]">
            <Link to={"/"}>
                <h3>Homepage</h3>
            </Link>
            <Link to={"/trade"}>
                  <h3>Portfolio</h3>
            </Link>
            <Link to={"/portfolio"}>
                  <h3>Trade (reverse later)</h3>
            </Link>
            {/* <Link >
                <h3>Homepage</h3>
            </Link> */}
        </div>
    </div>
  )
}

export default NavBar
