import './LandingPage.css'

import Navbar from "../../components/molecules/navbar/navbar"
import FirstBanner from "../../components/atoms/firstBanner/FirstBanner"

import Footer from '../../components/molecules/footer/footer'

function LandingPage() {
  return (
    <>
        <header>
            <FirstBanner />
            <Navbar></Navbar>
                
        </header>

        <main>


        </main>

        <footer>
          <Footer />
        </footer>

    </>
  )
}

export default LandingPage