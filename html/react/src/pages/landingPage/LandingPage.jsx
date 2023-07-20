
import Navbar from "../../components/molecules/navbar/navbar"
import FirstBanner from "../../components/atoms/firstBanner/FirstBanner"
import Sales from "../../components/molecules/sales/Sales"
import GoFound from "../../components/molecules/goFound/goFound"
import Brands from "../../components/molecules/brands/Brands"
import Footer from '../../components/molecules/footer/footer'

function LandingPage() {
  return (
    <>
        <header>
          <FirstBanner />
          <Navbar></Navbar>
                
        </header>

        <main>
          <Sales />
          <GoFound />
          <Brands />
        </main>

        <footer>
          <Footer />
        </footer>

    </>
  )
}

export default LandingPage