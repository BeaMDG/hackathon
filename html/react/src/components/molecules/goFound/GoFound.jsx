import './GoFound.css'
import Btn from '../../atoms/button/Btn'
import DuckNature from "../../../assets/DuckNature.png"

function goFound() {
  return (
    <>
        <section className='goFoundSection'> 
            <article>
                <h2 className='goFoundText'>Sabias que...</h2>
                <h3 className='goFoundText'>El 10% del precio de cualquier producto va destinado 
                a las reservas protegidas de los patos</h3>
                <img id='imgNature' src={DuckNature}/>
            </article>
            <div className='goFoundContainer'>
                <article>
                    <h3 className='goFoundText'>Ayudanos junto a la Organizacion WWF a aumentar tu 
                    coleccion de patos y a mejorar la vida de ellos!!</h3>
                </article>
                <div className='goFoundBtn'>
                    <Btn className="bttn3" content = {'Más info aquí'}></Btn>
                </div>
            </div>
        </section>
    </>
  )
}

export default goFound