/* ============================================
   ANDI VIDANDI — App principal
   
   Este archivo Solo conecta todo.
   orquestar los componentes.
   
   ============================================ */

import { useState } from 'react'

// Datos
import { pages } from './data/content'

// Componentes base
import Nav    from './components/Nav'
import Footer from './components/Footer'

// Secciones
import Hero     from './components/sections/Hero'
import Erase    from './components/sections/Erase'
import Telon    from './components/sections/Telon'
import Cuentos  from './components/sections/Cuentos'
import LoPasa   from './components/sections/LoPasa'
import Ninos    from './components/sections/Ninos'
import Cuentame from './components/sections/Cuentame'

export default function App() {
  const [activePage, setActivePage] = useState("home")

  const navigate = (id) => {
    setActivePage(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Mapa de secciones — agregar una página nueva
  const sections = {
    home:     <Hero      onNavigate={navigate} />,
    erase:    <Erase     onNavigate={navigate} />,
    telon:    <Telon     onNavigate={navigate} />,
    cuentos:  <Cuentos   />,
    lopasa:   <LoPasa    />,
    ninos:    <Ninos     />,
    cuentame: <Cuentame  />,
  }

  return (
    <div className="andi-root">
      <Nav
        pages={pages}
        activePage={activePage}
        onNavigate={navigate}
      />

      {sections[activePage]}

      <Footer
        pages={pages}
        onNavigate={navigate}
      />
    </div>
  )
}