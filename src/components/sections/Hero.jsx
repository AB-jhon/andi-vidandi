/* ============================================
   ANDI VIDANDI — Sección: Inicio
   Props:
   - onNavigate: función para cambiar de página
   ============================================ */

import '../../styles/components/hero.css'

export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Donde los cuentos respiran</div>
        <h1 className="hero-title">
          Andi<br /><em>Vidandi</em>
        </h1>
        <p className="hero-subtitle">…y las emociones florecen.</p>
        <p className="hero-desc">
          En este universo, los cuentos no sólo se escuchan, también se sienten.
          Cada historia es una semillita que despierta emociones: la risa que florece,
          la tristeza que se asoma tímida, la valentía que crece poquito a poco.
        </p>
        <button className="hero-cta" onClick={() => onNavigate("erase")}>
          Descubrir el universo <span className="hero-cta-arrow">→</span>
        </button>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-img-frame">
          <img
            src="https://andividandi.wordpress.com/wp-content/uploads/2025/10/01-4.jpg"
            alt="Andi Vidandi"
          />
          <div className="hero-img-badge">
            <strong>Filosofía</strong>
            "Imaginar también es una forma de abrazar lo que somos."
          </div>
        </div>
      </div>
    </section>
  )
}