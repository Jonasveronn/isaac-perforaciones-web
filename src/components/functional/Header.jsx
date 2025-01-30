import React, { useState } from "react"
import { Link } from "react-router-dom"
import burguer from "../../assets/menu-burguer.svg"
import { motion } from "framer-motion"
import logo from "../../assets/logo-blanco-sin-fondo.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Animaciones para el menú
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 250, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 250, damping: 30 },
    },
  }

  return (
    <header className="top-0 left-0 w-full h-[18vh] flex justify-between items-center px-4 z-10 bg-gradient-to-b from-[#00294a] to-slate-900">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-72 h-72" />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 p-4">
        <Link to="/" className="text-white">
          Inicio
        </Link>
        <Link to="/about" className="text-white">
          ¿Quienes somos?
        </Link>
        <Link to="/services" className="text-white">
          Servicios
        </Link>
        <Link to="/contact" className="text-white">
          Contacto
        </Link>
      </div>

      <img
        src={burguer}
        alt="menu"
        title="Menu"
        className="block md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <motion.div
        className="z-50 absolute top-[18vh] right-0 w-full bg-gradient-to-b from-[#00294a] to-slate-900 flex flex-col items-center gap-10 py-4 md:hidden"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <Link
          to="/"
          className="text-white text-2xl py-2 px-4 hover:bg-slate-700 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className="text-white text-2xl py-2 px-4 hover:bg-slate-700 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          ¿Quienes somos?
        </Link>
        <Link
          to="/services"
          className="text-white text-2xl py-2 px-4 hover:bg-slate-700 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Servicios
        </Link>
        <Link
          to="/contact"
          className="text-white text-2xl py-2 px-4 hover:bg-slate-700 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Contacto
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
