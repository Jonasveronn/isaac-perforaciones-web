import React, { useState } from "react"
import { Link } from "react-router-dom"
import burguer from "../../assets/menu-burguer.svg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="top-0 left-0 w-full h-[10vh] flex justify-between items-center px-4 z-10 bg-gradient-to-b from-[#00294a] to-slate-900">
      {/* Logo */}
      <div>
        <h1 className="text-white">ISAAC PERFORACIONES S.L.</h1>
      </div>

      {/* Menú normal */}
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
        <Link to="contact" className="text-white">
          Contacto
        </Link>
      </div>

      {/* Menú hamburguesa */}
      <img
        src={burguer}
        alt="menu"
        title="Menu"
        className="block md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menú móvil */}
      {menuOpen && (
        <div
          className="z-50 absolute top-[10vh] right-0 w-full bg-slate-900 flex flex-col items-center gap-4 py-4 md:hidden 
            transform translate-y-0 transition-transform duration-500 ease-in-out"
        >
          <Link
            to="/"
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ¿Quienes somos?
          </Link>
          <Link
            to="/services"
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Servicios
          </Link>
          <Link
            to="contact"
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
