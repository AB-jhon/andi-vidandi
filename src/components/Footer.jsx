/* ============================================
   ANDI VIDANDI — Componente de footer
   Props:
   - pages: array de páginas
   - onNavigate: función para cambiar de página
   ============================================ */

import '../styles/components/footer.css'

export default function Footer({ pages, onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-logo">Andi Vidandi</div>
      <div className="footer-tagline">
        Donde los cuentos respiran y las emociones florecen.
      </div>
      <nav className="footer-nav">
        {pages.map((p) => (
          <button key={p.id} onClick={() => onNavigate(p.id)}>
            {p.label}
          </button>
        ))}
      </nav>
      <div className="footer-copy">
        © {new Date().getFullYear()} Andi Vidandi · Hecho con amor y palabras que sienten
      </div>
    </footer>
  )
}