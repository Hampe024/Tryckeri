import { Route, Routes } from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./components/Pages/home"
import Products from "./components/Pages/products"
import About from "./components/Pages/about"
import Faq from "./components/Pages/faq"
import OldKuvert from "./components/productPages/Kuvert-old"
import NotFound from "./components/404"
import Footer from "./components/Footer"

import './style/css/App.css';

function App() {

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/hejsantest" element={<OldKuvert />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
