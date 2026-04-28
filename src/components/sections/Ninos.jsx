/* ============================================
   ANDI VIDANDI — Sección: Niños y adultos
   Props: ninguna
   Datos: importados de content.js
   ============================================ */

import '../../styles/components/sections.css'
import { ninosItems } from '../../data/content'

export default function Ninos() {
  return (
    <section className="section ninos-bg">
      <div className="section-header">
        <span className="section-tag">Crianza emocional</span>
        <h2 className="section-title">Niños que sienten, <em>adultos que escuchan</em></h2>
        <p className="section-subtitle">
          El encuentro más importante: el del corazón de un niño con la mirada de un adulto presente.
        </p>
      </div>
      <div className="ninos-grid">
        {ninosItems.map((n, i) => (
          <div className="ninos-item" key={i}>
            <span className="ninos-item-icon">{n.icon}</span>
            <h3>{n.title}</h3>
            <p>{n.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}