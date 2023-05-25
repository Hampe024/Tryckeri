import { Route, Routes } from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./components/home"
import Products from "./components/products"
import About from "./components/about"
import NotFound from "./components/404"

import './style/App.css';

function App() {

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
