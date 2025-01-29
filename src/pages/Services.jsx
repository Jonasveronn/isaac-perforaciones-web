import React from "react"
import waterIcon from "../assets/water-icon.svg"
import sunIcon from "../assets/sun-icon.svg"
import tapIcon from "../assets/tap-icon.svg"

function Servicios() {
  const servicios = [
    {
      titulo: "Perforaciones en búsqueda de agua",
      descripcion:
        "Garantizamos acceso al agua subterránea con técnicas avanzadas y equipos modernos.",
      icono: <img src={waterIcon} alt="Perforaciones de agua" />,
    },
    {
      titulo: "Instalación de energía solar",
      descripcion:
        "Ahorra energía y protege el medio ambiente con sistemas solares eficientes.",
      icono: <img src={sunIcon} alt="Energia solar" />,
    },
    {
      titulo: "Potabilización de agua",
      descripcion:
        "Sistemas de purificación que aseguran agua potable para tu hogar o negocio.",
      icono: <img src={tapIcon} alt="Potabilización del agua" />,
    },
  ]

  return (
    <div className="mt-16 px-8 lg:px-16 pb-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="group bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Icono */}
            <div className="flex items-center justify-center h-32 bg-gradient-to-b from-[#00294a] to-slate-900 text-white text-6xl">
              {servicio.icono}
            </div>
            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-blue-500 transition duration-300">
                {servicio.titulo}
              </h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-800">
                {servicio.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios
