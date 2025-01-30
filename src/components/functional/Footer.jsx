import React from "react"
import { Link } from "react-router-dom"
import phoneIcon from "../../assets/phone-icon.svg"
import emailIcon from "../../assets/email-icon.svg"
import locationIcon from "../../assets/location-icon.svg"
import linkedinIcon from "../../assets/linkedin-icon.svg"
import instagramIcon from "../../assets/instagram-icon.svg"
import facebookIcon from "../../assets/facebook-icon.svg"
import youtubeIcon from "../../assets/youtube-icon.svg"

function Footer() {
  return (
    <footer className="w-full bottom-0 bg-gradient-to-b from-[#00294a] to-slate-900 text-white py-8">
      {/* Sección de contacto */}
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-8 px-4">
        {/* Información de contacto */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contáctanos</h2>
          <div className="flex items-center gap-2 mb-2">
            <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
            <a href="https://wa.me/123456789" className="hover:underline">
              +54 123 456 789
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img src={emailIcon} alt="Email" className="w-6 h-6" />
            <a href="mailto:correo@ejemplo.com" className="hover:underline">
              correo@ejemplo.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="Ubicación" className="w-6 h-6" />
            <span>Calle Falsa 123, Resistencia-Chaco, Argentina</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <h2 className="text-lg font-bold mb-4">Síguenos</h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Política de privacidad y derechos reservados */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-4">
        <p>Marca registrada © 2025 ISAAC PERFORACIONES</p>
        <div className="flex gap-2">
          <span>|</span>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:underline">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
