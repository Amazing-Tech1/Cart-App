import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Cart from "./Cart"
import ProductPage from "./ProductPage"
import Missing from "./Missing"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="product">
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<Missing />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  )
}

export default App
