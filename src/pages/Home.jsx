import React from "react"
import HeroVideo from "../components/functional/HeroVideo"
import Services from "../pages/Services"
import foto1 from "../assets/foto1.webp"

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideo />
      <div className="mt-16 px-8 lg:px-16">
        {/* Title and Subtitle */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Perforaciones en búsqueda de agua
        </h1>
        <h2 className="text-xl lg:text-2xl text-center mt-4 text-gray-700 font-style: italic">
          Accede al agua que necesitas y reduce tus costos energéticos con
          nuestros servicios profesionales sostenibles
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-12 px-8 lg:px- ">
        {/* Image */}
        <img
          src={foto1}
          alt="Perforaciones de agua"
          className="w-full lg:w-1/3 rounded-lg shadow-md"
        />
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            En <span className="font-bold">ISAAC PERFORACIONES</span>,
            utilizamos equipos avanzados y técnicas precisas para localizar y
            acceder al agua subterránea. Nuestro equipo de expertos garantiza un
            servicio eficiente y sostenible, adaptado a las necesidades de cada
            terreno. Ya sea para uso agrícola, industrial o doméstico, confía en
            nosotros para asegurar el éxito de tu proyecto.
          </p>
        </div>
      </div>
      <Services />
    </>
  )
}

export default Home
