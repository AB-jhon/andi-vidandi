/* ============================================
   ANDI VIDANDI — Sección: Cuéntame tú
   Props: ninguna
   Estado: formulario de contacto local
   ============================================ */

import { useState } from 'react'
import '../../styles/components/sections.css'

export default function Cuentame() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (formData.nombre && formData.mensaje) {
      setSent(true)
    }
  }

  const handleReset = () => {
    setSent(false)
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <section className="section">
      <div className="cuentame-layout">
        <div className="section-header">
          <span className="section-tag">Tu historia</span>
          <h2 className="section-title">Cuéntame <em>tú</em></h2>
          <p className="section-subtitle">
            Ahora es tu turno. ¿Qué historia llevas dentro?
          </p>
        </div>

        {!sent ? (
          <div className="contact-form">
            <div className="form-group">
              <label>Tu nombre</label>
              <input
                type="text"
                placeholder="¿Cómo te llamas?"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Tu correo</label>
              <input
                type="email"
                placeholder="para poder responderte"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Tu historia o mensaje</label>
              <textarea
                rows={5}
                placeholder="Cuéntame lo que quieras… una emoción, una historia, una pregunta…"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>
            <button className="form-submit" onClick={handleSubmit}>
              Enviar mi historia ✉️
            </button>
          </div>
        ) : (
          <div className="contact-form" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌸</div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "var(--rust)"
            }}>
              ¡Gracias, {formData.nombre}!
            </h3>
            <p style={{ color: "rgba(109, 82, 39, 0.65)", lineHeight: 1.8 }}>
              Tu historia ya vive aquí. Pronto te escribiré de vuelta.
            </p>
            <br />
            <button className="form-submit" onClick={handleReset}>
              Enviar otro mensaje
            </button>
          </div>
        )}
      </div>
    </section>
  )
}