import './DropdownMenu.css'
import Menu from "../../../assets/menuIcon.png"


function DropdownMenu() {
  return (
    <>
        <div className="dropdownContainer">
            <img id='imgMenu' src={Menu}/>
            <ul>
                <li>Productos</li>
                <li>Destacados</li>
                <li>Para vender</li>
            </ul>
        </div>
    </>
  )
}

export default DropdownMenu