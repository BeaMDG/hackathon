import Navbar from '../../components/components/molecules/navbar/Navbar'
import CardItems from  '../../components/components/molecules/cardItems/CardItems'

import Footer from '../../components/components/molecules/footer/footer'
import FirstBanner from "../../components/components/atoms/firstBanner/FirstBanner"

function LandingPage() {
  return (
    <>
        <header>
            <FirstBanner/>
            <Navbar/>
                
        </header>

        <main>
          <CardItems/>
          
        </main>

        <footer>
          <Footer/>
        </footer>

    </>
  )
}

export default LandingPage