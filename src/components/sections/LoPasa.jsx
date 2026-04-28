/* ============================================
   ANDI VIDANDI — Sección: Lo que pasa
   Props: ninguna
   Datos: importados de content.js
   ============================================ */

import '../../styles/components/sections.css'
import { lopasaCards } from '../../data/content'

export default function LoPasa() {
  return (
    <section className="section lopasa-bg">
      <div className="section-header">
        <span className="section-tag">El poder del lenguaje</span>
        <h2 className="section-title">Lo que pasa cuando <em>hablamos</em></h2>
        <p className="section-subtitle">
          Las palabras tienen un poder extraordinario cuando se usan con intención.
        </p>
      </div>
      <div className="lopasa-layout">
        <div className="lopasa-aside">
          <h3>Las palabras crean mundos.</h3>
          <p>Cuando nombramos lo que sentimos, le damos forma a lo invisible.
            Cuando escuchamos de verdad, construimos puentes entre corazones.</p>
        </div>
        <div className="lopasa-cards">
          {lopasaCards.map((c, i) => (
            <div className="lopasa-card" key={i}>
              <span className="lopasa-icon">{c.icon}</span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}