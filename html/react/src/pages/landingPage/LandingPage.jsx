
import Navbar from "../../components/molecules/navbar/navbar"
import FirstBanner from "../../components/atoms/firstBanner/FirstBanner"
import CardItems from '../../components/molecules/cardItems/CardItems'

import Footer from '../../components/molecules/footer/footer'

function LandingPage() {
  return (
    <>
        <header>
            <FirstBanner />
            <Navbar></Navbar>
                
        </header>

        <main>
          <CardItems />
        </main>

        <footer>
          <Footer />
        </footer>

    </>
  )
}

export default LandingPage