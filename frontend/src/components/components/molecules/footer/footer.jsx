import './footer.css'

import Logo from "../../../../assets/DuckIconLittle.png"


function footer() {
  return (
    <>
        <section className="footerSection">
            <header className='footerContainer'>
                <article>
                    <ul className='ulFooter'>
                        <li><h3>Contacto</h3></li>
                        <li>Patolandia, Landia</li>
                        <li>pato@landia.com</li>
                        <li>+6666666666</li>
                    </ul>
                </article>
                <div className='media'>
                    <div className='mediaIcons'>
                        <img src={Logo} alt="Facebook"/>
                    </div>
                    <div className='mediaIcons'>
                        <img src={Logo} alt="Facebook"/>
                    </div>
                    <div className='mediaIcons'>
                        <img src={Logo} alt="Facebook"/>
                    </div>
                    <div className='mediaIcons'>
                        <img src={Logo} alt="Facebook"/>
                    </div>
                </div>
            </header>

            <footer>
                <h4>Quackly.com</h4>
                <h4>Quackly S.A.</h4>
            </footer>

        </section>
    </>
  )
}

export default footer