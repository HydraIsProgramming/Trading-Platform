import React, { useState, useEffect } from 'react'
import { MdOutlineSearch } from "react-icons/md";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    console.log(searchQuery)
    // when submitted, if no input then do nothing otherwise go to first result
  }

  return (
    <div className='bg-gray-200 text-gray-800 rounded-full focus:outline-none px-4 py-2'>
      <form onSubmit = {handleSubmit} className = "flex">
        <input value={searchQuery} onChange={handleChange} className= "w-[600px] bg-gray-200 focus:outline-none  text-gray-800 " type = "text" name = "searchQuery" placeholder = "Search..."/>
        <button className= "" type = "submit">
          <MdOutlineSearch className= "bg-teal-500 text-white p-[3px] rounded-full ml-2" size = {30}/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar