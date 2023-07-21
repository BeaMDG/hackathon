import Navbar from '../../components/components/molecules/navbar/Navbar'
import CardItems from  '../../components/components/molecules/cardItems/CardItems'

import Footer from '../../components/components/molecules/footer/footer'
import FirstBanner from "../../components/components/atoms/firstBanner/FirstBanner"
import Sales from "../../components/components/molecules/sales/Sales"
import GoFound from "../../components/components/molecules/goFound/GoFound"
import Brands from "../../components/components/molecules/brands/Brands"

function LandingPage() {
  return (
    <>
        <header>
            <FirstBanner/>
            <Navbar/>
                
        </header>

        <main>
          <Sales />
          <CardItems/>
          <GoFound />
          <Brands />
          
        </main>

        <footer>
          <Footer/>
        </footer>

    </>
  )
}

export default LandingPage