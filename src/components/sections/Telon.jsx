/* ============================================
   ANDI VIDANDI — Sección: Detrás del telón
   Props:
   - onNavigate: función para cambiar de página
   ============================================ */

import '../../styles/components/sections.css'

export default function Telon({ onNavigate }) {
  return (
    <section className="section telon-bg">
      <div className="section-header">
        <span className="section-tag">La creadora</span>
        <h2 className="section-title">Detrás del <em>telón</em></h2>
        <p className="section-subtitle">La historia que da vida a todas las historias.</p>
      </div>
      <div className="telon-layout">
        <div className="telon-card">
          <p>Detrás de cada cuento hay una voz que lo soñó primero. Una mirada que creyó
            que las palabras podían curar, conectar, transformar.</p>
          <p>Andi Vidandi nació de la convicción de que los niños merecen historias que los
            vean de verdad: que nombren sus miedos, celebren su alegría y acompañen su tristeza sin prisa.</p>
          <p>Porque cuando un cuento te hace sentir menos solo, algo mágico ocurre en el corazón.</p>
        </div>
        <div>
          <div className="quote-block" style={{ marginBottom: "2rem" }}>
            <p>"Los cuentos son espejos del alma: reflejan lo que callamos,
              lo que soñamos, lo que aún no entendemos."</p>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "rgba(44,36,22,0.7)" }}>
            Cada personaje, cada emoción, cada palabra elegida con amor… son las huellas de alguien
            que cree en el poder transformador de las historias bien contadas.
          </p>
          <br />
          <button className="hero-cta" onClick={() => onNavigate("lopasa")}>
            Lo que pasa cuando hablamos <span className="hero-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}