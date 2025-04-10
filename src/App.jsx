import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CenterLogo from './components/CenterIcon'
import ProductPage from './components/SingleProduct'
import ProductDetails from './components/ProductDetails'
import RelatedProducts from './components/RelatedProducts'
import EmailSection from './components/Email'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <CenterLogo />
      <ProductPage />
      <ProductDetails />
      <RelatedProducts />
      <EmailSection />
      <Footer />
    </>
  )
}

export default App
