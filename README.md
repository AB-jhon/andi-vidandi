# ANDI-VIDANDI

**🌟 Sitio web interactivo para cuentos infantiles y educación emocional**

[Visita el sitio en vivo](https://tu-url-de-netlify.netlify.app) · [Documentación técnica](Andi_Vidandi_Documentacion.docx)

---
## 📌 Descripción del proyecto
**ANDI-VIDANDI** es un **sitio web de una sola página (SPA)** desarrollado con **React 18 + Vite**, diseñado para presentar el universo creativo de cuentos infantiles y educación emocional de Andi Vidandi. El sitio cuenta con **7 secciones navegables**, diseño responsivo para móvil, tablet y escritorio, y una paleta de colores cuidadosamente seleccionada para reflejar la identidad de la marca.

---
## 🎨 Características principales
- **7 secciones interactivas**: Inicio, Érase una vez, Detrás del telón, Cuentos que sienten, Lo que pasa, Niños y adultos, Cuéntame tú.
- **Diseño responsivo**: Adaptado para móvil, tablet y escritorio.
- **Formulario de contacto**: Con validación básica.
- **Sin backend**: Fácil de desplegar en hosting gratuito como Netlify o Vercel.
- **Paleta de colores personalizada**: 9 colores definidos en variables CSS para fácil mantenimiento.

---
## 🛠 Tecnologías utilizadas
- **Frontend**: React 18 + Vite
- **Estilos**: CSS modular
- **Hosting**: Netlify (recomendado para despliegue gratuito)
- **Formularios**: EmailJS (integración pendiente para envío de correos)

---
## 📂 Estructura del proyecto

ANDI-VIDANDI/

├── src/

│   ├── styles/

│   │   ├── variables.css    ← Colores y fuentes del sitio

│   │   ├── global.css       ← Estilos base globales

│   │   └── components/      ← Estilos por componente

│   ├── data/

│   │   └── content.js       ← Textos y datos editables

│   ├── components/

│   │   ├── Nav.jsx          ← Barra de navegación

│   │   ├── Footer.jsx       ← Pie de página

│   │   └── sections/        ← Componentes de cada sección

│   ├── App.jsx               ← Orquestador principal

│   └── main.jsx             ← Punto de entrada

├── index.html

├── package.json

├── vite.config.js

└── Andi_Vidandi_Documentacion.docx  ← Documentación técnica detallada

---
## 🎨 Paleta de colores
Todos los colores están centralizados en `src/styles/variables.css`. Para cambiar un color, solo edita este archivo.

| Variable       | Color actual  | Uso principal                  |
|----------------|---------------|--------------------------------|
| `--terra`      | `#C62828`     | Color principal de marca       |
| `--ink`        | `#2e5d7a`     | Texto principal y footer       |
| `--warm`       | `#f6a429`     | Fondo sección "Detrás del telón"|
| `--forest`     | `#2e6a8f`     | Fondo sección "Niños"          |

---
## ✏️ Cómo editar el contenido
Los textos y datos están separados del código visual en `src/data/content.js`. Para editar el contenido sin afectar el diseño:

- **Menú de navegación**: Edita el array `pages`.
- **Emociones**: Edita el array `emotions`.
- **Cards y secciones**: Cada sección tiene su propio array de datos.

---
## 🚀 Cómo ejecutar el proyecto localmente
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/AB-jhon/andi-vidandi.git