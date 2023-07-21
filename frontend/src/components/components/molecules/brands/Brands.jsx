import './Brands.css'

import ImgLogo from "../../../../assets/BigLogo.png"
import ImgWWF from '../../../../assets/wwfLogo.png'

function Brands() {
  return (
    <>
        <section className='brandSection'>
            <img id='imgBrands1' src={ImgLogo}/>
            <img id='imgBrands2' src={ImgWWF}/>
        </section>

    </>
  )
}

export default Brands