import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Footer from "./components//functional/Footer"
import Header from "./components/functional/Header"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Services from "../src/pages/Services"
import WhatsAppButton from "./components/functional/WhatsAppButton"
import FAQ from "./pages/FAQ"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
