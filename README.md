# Granja Delicias — Sitio web (Granja delicias 2.0)

**Descripción**
- Proyecto web para presentar productos de una granja artesanal. Interfaz construida con Astro y componentes en React/TypeScript.

**Características**
- Interfaz estática y componentes reutilizables (`src/components`).
- Carousel, filtros y formulario de contacto.
- Estilizado con Tailwind CSS y utilidades usables (Radix UI, clsx, CVA).

**Tecnologías**
- Astro
- React + TypeScript
- Tailwind CSS
- Radix UI
- Zustand, Zod, React Hook Form

**Requisitos**
- Node.js (recomendado LTS, p. ej. >=18)
- npm o pnpm

**Instalación**
1. Clona el repositorio:

```bash
git clone <repositorio> && cd granja-delicias
```

2. Instala dependencias:

```bash
npm install
# o
pnpm install
```

**Scripts disponibles**
- `npm run dev` — Ejecuta el servidor de desarrollo (Astro).
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la build localmente.
- `npm run astro` — Accede a la CLI de Astro.

Ejemplo rápido:

```bash
npm run dev
# luego abrir http://localhost:3000 (o el puerto que indique Astro)
```

**Estructura principal**
- `src/` — Código fuente (componentes, páginas, estilos).
- `public/` — Archivos estáticos servidos tal cual.
- `media/` y `src/assets/media/` — Imágenes y banners.
- `src/components/` — Componentes React/TSX usados en las páginas.
- `pages/` — Rutas y páginas Astro (ej. `src/pages/index.astro`).

**Notas y recomendaciones**
- Ajusta variables de Tailwind o configuración de Astro si despliegas a un host específico.
- Si usas GitHub Pages, Netlify o Vercel, sigue sus guías para proyectos Astro.

**Licencia**
- Añade la licencia que corresponda (p. ej. MIT) si procede.

---

Si quieres, puedo añadir un badge de dependencias, scripts de CI, o una sección de despliegue específica para Vercel/Netlify.
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
