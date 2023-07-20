import './Sales.css'

import Btn from "../../atoms/button/Btn"

import Ducktennis from '../../../assets/DuckTennis.png'

function Sales() {
  return (
    <>
        <section>
            <article className='salesSection'>
                <h2>Vende tus patos al mejor precio!</h2>
            </article>
            <div className='salesContainer'>
                <div className='salesText'> 
                    <p id='sales1'>Podras vender todos los patoproductos que quieras!</p>
                    <Btn className="bttn3" content = {'Quiero vender'}></Btn>
                    <p id='sales2'>A un solo click!</p>
                </div>
                <article className='salesImg'>
                    <img id='imgBrands1' src={Ducktennis}/>
                </article>
            </div>
        </section>
    </>
  )
}

export default Sales