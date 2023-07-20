import './SearchBar.css'
import Search from "../../../assets/searchIcon.png"
import { useState } from 'react'

const SearchBar = () => {
    const [input, setInput] = useState("")
  return (
    <>
        <div className="searchContainer">
            <div className="inputWrapper">
                <img id="imgNavbar" src={Search}/>
                <input 
                    placeholder='Lo que necesites...' 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </div>
    </>
  )
}

export default SearchBar