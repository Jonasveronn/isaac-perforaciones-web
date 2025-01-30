import foto1 from "../assets/foto1.webp"
import foto2 from "../assets/foto2.webp"
import foto3 from "../assets/foto3.webp"
import foto4 from "../assets/foto4.webp"

function About() {
  const sections = [
    {
      text: `En PERFORACIONES ISAAC, somos una empresa familiar que nace de la unión de dos familias visionarias, los Verón y los Acosta, con un propósito claro: mejorar la calidad de vida de las personas a través de servicios innovadores y comprometidos.`,
      img: foto2,
      alt: "Equipo de trabajo en perforaciones",
    },
    {
      text: `Nuestra historia comienza con Raúl Alberto Verón, un emprendedor incansable que, junto a su esposa María Cristina Esparza y sus hijos, decidió superar adversidades y buscar nuevas oportunidades uniéndose a su primo y su familia, los Acosta.`,
      img: foto1,
      alt: "Maquinaria de perforación en acción",
    },
    {
      text: `Eduardo César Acosta, técnico mecánico y técnico electromecánico con una amplia trayectoria en Argentina, aporta su experiencia en el manejo y reparación de maquinarias industriales, lo que ha sido clave para el desarrollo y sostenibilidad de nuestros servicios.`,
      img: foto3,
      alt: "Técnico trabajando en maquinaria",
    },
    {
      text: `Nos enorgullece ofrecer soluciones en perforaciones para la búsqueda de agua y la instalación de placas solares, siendo un apoyo vital para la agricultura, ganadería y comunidades que enfrentan desafíos relacionados con la escasez de recursos.`,
      img: foto4,
      alt: "Perforación de agua en proceso",
    },
  ]

  const valores = [
    {
      titulo: "Compromiso",
      descripcion:
        "Cumplimos lo que prometemos y nos esforzamos por superar expectativas.",
    },
    {
      titulo: "Calidad",
      descripcion:
        "Ofrecemos soluciones efectivas con maquinaria avanzada y un enfoque profesional.",
    },
    {
      titulo: "Innovación",
      descripcion:
        "Incorporamos tecnología de vanguardia para garantizar resultados sostenibles.",
    },
    {
      titulo: "Sostenibilidad",
      descripcion:
        "Promovemos prácticas responsables con el medio ambiente y el uso eficiente de recursos.",
    },
    {
      titulo: "Trabajo en equipo",
      descripcion:
        "Nuestra fuerza radica en la colaboración y el compromiso de nuestro equipo.",
    },
    {
      titulo: "Confianza",
      descripcion:
        "Nos basamos en la transparencia y la honestidad para fortalecer relaciones duraderas.",
    },
  ]

  return (
    <section id="quienes-somos" className="px-6 lg:px-20 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        ¿Quiénes Somos?
      </h2>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12 py-12 even:bg-gray-100 rounded-lg shadow-lg p-6`}
        >
          <img
            src={section.img}
            alt={section.alt}
            className="w-full lg:w-1/3 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          />
          <p className="text-lg text-gray-700 text-center lg:text-left max-w-2xl leading-relaxed">
            {section.text}
          </p>
        </div>
      ))}

      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Nuestros Valores
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg p-6 text-center hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold mb-4">{valor.titulo}</h4>
              <p className="text-gray-600 group-hover:text-white">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Nuestro Equipo
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-center">
          <li>Raúl Alberto Verón</li>
          <li>Eduardo César Acosta</li>
          <li>María Cristina Esparza</li>
          <li>Nélida Irene Stefanoff</li>
          <li>Gabriel Alberto Verón</li>
          <li>Raúl Juan Verón</li>
          <li>Jonás Emanuel Verón</li>
          <li>Noelia Anabella Acosta</li>
          <li>Eduardo Andrés Acosta</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold">
          Agradecemos profundamente a nuestros clientes por confiar en nosotros.
        </p>
        <p className="text-lg font-bold text-blue-600 mt-2">
          ¡En PERFORACIONES ISAAC, estamos aquí para ayudarte a construir un
          futuro mejor!
        </p>
      </div>
    </section>
  )
}

export default About
