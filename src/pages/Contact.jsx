import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Todos los campos obligatorios deben completarse.",
      })
      return
    }

    console.log("Datos enviados:", formData)

    setStatus({
      type: "success",
      message:
        "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
    })

    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contacto" className="px-6 lg:px-20 py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Contáctanos</h2>
      <p className="text-center text-lg mb-8">
        Déjanos tu mensaje y nos pondremos en contacto contigo lo antes posible.
      </p>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium">Nombre *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium">
              Correo Electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="correo@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium">
              Teléfono (Opcional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Tu teléfono"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Mensaje *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Escribe tu mensaje aquí..."
              rows="4"
              required
            ></textarea>
          </div>

          {status && (
            <p
              className={`text-center text-lg font-semibold ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
