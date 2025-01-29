import React from "react"
import whatsappIcon from "../../assets/whatsapp-icon.svg"

function WhatsAppButton() {
  const phoneNumber = "643139167"
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition"
      title="Contáctanos por WhatsApp"
    >
      {" "}
      <img src={whatsappIcon} alt="whatsApp" className="w-10 h-10" />
    </a>
  )
}

export default WhatsAppButton
