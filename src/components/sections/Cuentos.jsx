/* ============================================
   ANDI VIDANDI — Sección: Cuentos que sienten
   Props: ninguna
   Datos: importados de content.js
   ============================================ */

import '../../styles/components/sections.css'
import { emotions } from '../../data/content'

export default function Cuentos() {
  return (
    <section className="section cuentos-bg">
      <div className="section-header">
        <span className="section-tag">Las emociones</span>
        <h2 className="section-title">Cuentos que <em>sienten</em></h2>
        <p className="section-subtitle">En cada cuento hay una emoción escondida.</p>
      </div>
      <div className="emotions-grid">
        {emotions.map((e, i) => (
          <div className="emotion-card" key={i}>
            <span className="emotion-emoji">{e.emoji}</span>
            <span className="emotion-name">{e.name}</span>
            <span className="emotion-desc">{e.desc}</span>
          </div>
        ))}
      </div>
      <div className="cuentos-prose">
        <p>Los cuentos son espejos del alma: reflejan lo que callamos,
          lo que soñamos, lo que aún no entendemos.</p>
        <p>Aquí, cada historia es una invitación a reconocer, aceptar y fluir
          con nuestras emociones —porque sentir también es una forma de vivir bonito.</p>
        <div className="cuentos-big-quote">
          "Aquí los cuentos no solo se leen… se sienten."
        </div>
      </div>
      <div className="cuentos-images">
        <img src="https://andividandi.wordpress.com/wp-content/uploads/2025/10/3-cuentos-que-sienten-2.jpeg" alt="Cuentos 1" />
        <img src="https://andividandi.wordpress.com/wp-content/uploads/2025/10/3-cuentos-que-sienten-1.jpeg" alt="Cuentos 2" />
        <img src="https://andividandi.wordpress.com/wp-content/uploads/2025/10/3-cuentos-que-sienten-3.jpeg" alt="Cuentos 3" />
      </div>
    </section>
  )
}