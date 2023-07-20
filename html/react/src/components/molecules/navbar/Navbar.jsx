import './Navbar.css'
import SearchBar from "../../atoms/searchBar/SearchBar"
import Dropdown from "../../atoms/dropdownMenu/DropdownMenu"

import Logo from "../../../assets/DuckIconLittle.png"

function navbar() {
  return (
    <>
        <section className='navbar'>

          <div className='navbarContainer'>
            <header className='navbarLeft'>
              <div><img id='imgMenu' src={Logo}/></div>
              <div id='search'><SearchBar /></div>
            </header>

            <footer className='navbarRigth'>
              <Dropdown />
            </footer>
          </div> 

        </section>
    </>
  )
}

export default navbar