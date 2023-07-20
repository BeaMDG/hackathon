import React from 'react'
import Navbar from '../../components/molecules/navbar/navbar'
import CardItems from '../../components/molecules/cardItems/CardItems'
import Footer from '../../components/molecules/footer/footer'

export default function DetailPage() {
  return (
    <>
        <header>
           <Navbar/>
        </header>

        <main>
            <CardItems/>
        </main>

        <footer>
            <Footer />
        </footer>

    </>
  )
}
