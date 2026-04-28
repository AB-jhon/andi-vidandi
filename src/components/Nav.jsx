/* ============================================
   ANDI VIDANDI — Componente de navegación
   Props:
   - pages: array de páginas
   - activePage: página activa actual
   - onNavigate: función para cambiar de página
   ============================================ */

import '../styles/components/nav.css'

export default function Nav({ pages, activePage, onNavigate }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNavigate("home")}>
        Andi <span>Vidandi</span>
      </div>
      <ul className="nav-menu">
        {pages.map((p) => (
          <li key={p.id}>
            <button
              className={activePage === p.id ? "active" : ""}
              onClick={() => onNavigate(p.id)}
            >
              {p.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}