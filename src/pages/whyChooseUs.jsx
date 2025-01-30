import React from "react"
import { ShieldCheck, Wrench, Leaf, Lightbulb } from "lucide-react"

function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Confianza y Seguridad",
      description:
        "Ofrecemos un servicio confiable, con materiales de calidad y técnicos especializados.",
    },
    {
      icon: <Wrench size={40} className="text-orange-600" />,
      title: "Experiencia Técnica",
      description:
        "Contamos con profesionales altamente capacitados y maquinaria de última tecnología.",
    },
    {
      icon: <Leaf size={40} className="text-green-600" />,
      title: "Compromiso con el Medio Ambiente",
      description:
        "Utilizamos técnicas que minimizan el impacto ambiental y optimizan el uso de recursos.",
    },
    {
      icon: <Lightbulb size={40} className="text-yellow-600" />,
      title: "Innovación y Eficiencia",
      description:
        "Aplicamos soluciones innovadoras para lograr perforaciones precisas y efectivas.",
    },
  ]

  return (
    <section className="py-16 px-8 lg:px-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        ¿Por qué elegirnos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
