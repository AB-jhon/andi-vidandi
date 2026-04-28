/* ============================================
   ANDI VIDANDI — Sección: Érase una vez
   Props:
   - onNavigate: función para cambiar de página
   ============================================ */

import '../../styles/components/sections.css'

export default function Erase({ onNavigate }) {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-tag">El origen</span>
        <h2 className="section-title">Érase <em>una vez…</em></h2>
        <p className="section-subtitle">
          …un lugar donde las palabras tenían alas y los cuentos sabían escuchar.
        </p>
      </div>
      <div className="erase-layout">
        <div className="erase-img">
          <img
            src="https://andividandi.wordpress.com/wp-content/uploads/2025/10/03-1.jpg"
            alt="Érase una vez"
          />
        </div>
        <div className="erase-text">
          <p>En el universo de Andi Vidandi, los cuentos no sólo se escuchan… también se sienten.</p>
          <p>Cada historia es una <strong>semillita que despierta emociones</strong>: la risa que florece,
            la tristeza que se asoma tímida, la valentía que crece poquito a poco.</p>
          <div className="quote-block">
            <p>A través de palabras que juegan, colores que respiran y personajes que sienten
              como nosotros, los cuentos se vuelven un espejo suave donde el corazón se mira y se entiende.</p>
          </div>
          <p>Aquí, imaginar también es una forma de <strong>abrazar lo que somos</strong>.</p>
          <br />
          <button className="hero-cta" onClick={() => onNavigate("cuentos")}>
            Cuentos que sienten <span className="hero-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}