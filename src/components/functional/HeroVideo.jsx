import React from "react"
import videoSrc from "../../assets/video.mp4"

function HeroVideo() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden mt-16">
      {/* Video de fondo */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Capa oscura para resaltar el texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Texto superpuesto */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-start     text-white px-4">
        <p className="text-2xl md:text-6xl font-bold mb-4">
          ISAAC PERFORACIONES
        </p>
        <h1 className="text-xs md:text-2xl max-w-2xl">
          Expertos en perforaciones de agua y energía solar: Soluciones
          personalizadas en el Nordeste.
        </h1>
        <div className="mt-6 w-24 h-2 items-start bg-orange-500 text-white rounded-lg"></div>
      </div>
    </div>
  )
}

export default HeroVideo
