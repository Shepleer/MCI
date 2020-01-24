import React from "react"
import "./contactCard.sass"

const ContactCard = ({ adress, phone, email }) => {
  return (
    <div className="contact-card">
      <div>
        <p className="address-label">{adress}</p>
        <p className="contact-label">{phone}</p>
        <p className="contact-label">{email}</p>
      </div>
    </div>
  )
}

export default ContactCard
