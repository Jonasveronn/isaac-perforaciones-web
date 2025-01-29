import React from "react"

function FAQ() {
  const faqs = [
    {
      question: "¿Qué servicios ofrece PERFORACIONES ISAAC?",
      answer:
        "Ofrecemos servicios de perforaciones horizontales y verticales, estudios geotécnicos, instalación de pozos, entre otros.",
    },
    {
      question: "¿En qué zonas trabajan?",
      answer:
        "Prestamos servicios en toda Argentina. Contáctanos para consultar disponibilidad en tu área.",
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer:
        "Puedes enviarnos un mensaje a través del formulario de contacto, WhatsApp o llamarnos directamente.",
    },
    {
      question: "¿Tienen garantía en sus trabajos?",
      answer:
        "Sí, todos nuestros trabajos están respaldados por garantía de calidad. Trabajamos con los más altos estándares.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md border-l-4 border-blue-500"
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
