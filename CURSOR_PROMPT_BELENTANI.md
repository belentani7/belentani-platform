# CURSOR PROMPT — BELENTANI PLATFORM v2.0
## Proyecto completo: ~5.000+ líneas de código | Next.js 15 + TypeScript + Tailwind v4

---

## CONTEXTO DEL PROYECTO

Belentani es una plataforma digital híbrida que combina:
1. **Portal artístico inmersivo** — marca musical R&B/pop/electrónica, estética cyberpunk oscura ("Judas Experience")
2. **SaaS de gestión empresarial** — dashboard, facturación, clientes, analytics para PYMES españolas
3. **AI Lab** — herramientas de IA generativa integradas
4. **Studio creativo** — espacio de creación multimedia

### URLs de referencia existentes
- BuildAI.space: `https://judas-experience-13898.buildaispace.app`
- Netlify: `https://belentani.netlify.app`
- Base44: `https://belentani.base44.app`
- GitHub: `github.com/belentani7`

---

## REFERENCIAS DE DISEÑO (Awwwards-level)

### Patrones ganadores a implementar:
1. **Scroll-driven animations** — elementos que aparecen/transforman con scroll (como lfrfrr.com, dennissnellenberg.com)
2. **Cursor personalizado** — cursor con trail o morphing según zona (como monopo.vn)
3. **Page transitions suaves** — GSAP/Framer Motion entre rutas, sin flash blanco
4. **Tipografía heroica** — títulos display >120px con variable fonts y clip masks
5. **Glassmorphism 2.0** — backdrop-blur + bordes luminosos + grain texture
6. **Magnetic buttons** — botones que siguen el cursor antes del click
7. **Parallax por capas** — hero con 3-4 capas de profundidad
8. **Text scramble/reveal** — texto que se "hackea" letra por letra (estilo Matrix)
9. **Noise/grain overlay** — SVG grain sutil sobre fondos oscuros
10. **Smooth scrolling** — Lenis o similar para scroll suave nativo

### Webs ganadoras Awwwards como inspiración directa:
- **lfrfrr.com** — portfolio dark, tipografía brutal, transiciones fluidas
- **dennissnellenberg.com** — scroll animations, cursor custom, minimalismo dark
- **locomotive.ca** — smooth scroll, parallax, transiciones de página
- **resn.co.nz** — WebGL backgrounds, interactividad experimental
- **14islands.com** — 3D sutil, performance impecable, storytelling
- **brittanychiang.com** — developer portfolio, limpio, dark, accesible
- **linear.app** — SaaS premium, glassmorphism, animaciones sutiles
- **raycast.com** — command palette UI, dark mode perfecto, gradientes
- **vercel.com** — landing SaaS referencia, grid system, tipografía clara
- **stripe.com** — gradientes animados, microinteracciones, polish extremo

---

## STACK TÉCNICO (instalar todo antes de empezar)

```bash
# Crear proyecto
npx create-next-app@latest belentani-platform --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd belentani-platform

# Core
npm i framer-motion gsap @gsap/react lenis
npm i lucide-react clsx tailwind-merge class-variance-authority
npm i @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-avatar @radix-ui/react-separator @radix-ui/react-slot

# Charts y data
npm i recharts date-fns

# Auth y API
npm i next-auth@beta @auth/core
npm i zod react-hook-form @hookform/resolvers

# Dev
npm i -D @types/node prettier eslint-config-prettier
```

### Plugins Cursor recomendados:
- **Tailwind CSS IntelliSense**
- **Pretty TypeScript Errors**
- **Error Lens**
- **GitLens**
- **ESLint**

---

## ESTRUCTURA DE ARCHIVOS (~5.000+ líneas)

```
belentani-platform/
├── src/
│   ├── app/                          # App Router (Next.js 15)
│   │   ├── layout.tsx                # Root layout + providers + Lenis
│   │   ├── page.tsx                  # Landing / Home hero
│   │   ├── loading.tsx               # Global loading state
│   │   ├── not-found.tsx             # 404 cyberpunk
│   │   ├── globals.css               # Tailwind + custom CSS vars + grain
│   │   │
│   │   ├── (marketing)/              # Grupo público
│   │   │   ├── layout.tsx            # Nav pública + footer
│   │   │   ├── music/page.tsx        # Discografía + player
│   │   │   ├── judas/page.tsx        # Experiencia narrativa
│   │   │   ├── studio/page.tsx       # Herramientas creativas
│   │   │   ├── portal/page.tsx       # Gateway multidimensional
│   │   │   ├── ai-lab/page.tsx       # Laboratorio IA
│   │   │   ├── galaxy/page.tsx       # Universo expandido
│   │   │   ├── about/page.tsx        # Sobre el artista
│   │   │   └── contact/page.tsx      # Formulario contacto
│   │   │
│   │   ├── (auth)/                   # Grupo auth
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   │
│   │   ├── dashboard/                # SaaS privado
│   │   │   ├── layout.tsx            # Sidebar + topbar SaaS
│   │   │   ├── page.tsx              # Overview con KPIs
│   │   │   ├── clients/page.tsx      # Gestión clientes
│   │   │   ├── invoices/page.tsx     # Facturación
│   │   │   ├── analytics/page.tsx    # Reportes
│   │   │   └── settings/page.tsx     # Config cuenta
│   │   │
│   │   └── api/                      # API Routes
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── clients/route.ts
│   │       ├── invoices/route.ts
│   │       └── health/route.ts
│   │
│   ├── components/
│   │   ├── ui/                       # Primitivos (~800 líneas)
│   │   │   ├── button.tsx            # CVA variants, magnetic effect
│   │   │   ├── card.tsx              # Glassmorphism card
│   │   │   ├── input.tsx             # Floating label input
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx            # Radix dialog
│   │   │   ├── dropdown.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── data-table.tsx        # Tabla con sort/filter
│   │   │   └── chart-wrapper.tsx     # Recharts wrapper
│   │   │
│   │   ├── layout/                   # Layout (~600 líneas)
│   │   │   ├── navbar.tsx            # Nav principal con scroll effect
│   │   │   ├── footer.tsx            # Footer cyberpunk
│   │   │   ├── sidebar.tsx           # Sidebar dashboard
│   │   │   ├── topbar.tsx            # Topbar dashboard
│   │   │   ├── mobile-nav.tsx        # Menú móvil
│   │   │   └── page-transition.tsx   # Transiciones GSAP
│   │   │
│   │   ├── sections/                 # Secciones de página (~1.200 líneas)
│   │   │   ├── hero.tsx              # Hero con parallax + text scramble
│   │   │   ├── features-grid.tsx     # Grid de módulos
│   │   │   ├── music-player.tsx      # Reproductor inline
│   │   │   ├── terminal-overlay.tsx  # Terminal hacker overlay
│   │   │   ├── stats-counter.tsx     # Contadores animados
│   │   │   ├── testimonials.tsx      # Carrusel testimonios
│   │   │   ├── cta-section.tsx       # CTA con gradient
│   │   │   └── newsletter-form.tsx   # Newsletter Judas
│   │   │
│   │   ├── dashboard/                # Componentes SaaS (~1.000 líneas)
│   │   │   ├── kpi-cards.tsx         # Cards con sparklines
│   │   │   ├── revenue-chart.tsx     # Gráfico ingresos
│   │   │   ├── invoice-table.tsx     # Tabla facturas
│   │   │   ├── client-list.tsx       # Lista clientes
│   │   │   ├── activity-feed.tsx     # Feed actividad
│   │   │   └── quick-actions.tsx     # Acciones rápidas
│   │   │
│   │   └── effects/                  # Efectos visuales (~500 líneas)
│   │       ├── cursor.tsx            # Cursor personalizado
│   │       ├── grain-overlay.tsx     # SVG noise grain
│   │       ├── magnetic-button.tsx   # Botón magnético
│   │       ├── text-scramble.tsx     # Efecto text scramble
│   │       ├── parallax-layer.tsx    # Capa parallax
│   │       └── glow-card.tsx         # Card con glow follow
│   │
│   ├── lib/                          # Utilidades (~400 líneas)
│   │   ├── utils.ts                  # cn(), formatCurrency(), etc.
│   │   ├── fonts.ts                  # Next/font config
│   │   ├── auth.ts                   # NextAuth config
│   │   ├── validations.ts            # Zod schemas
│   │   └── constants.ts              # Colores, nav items, config
│   │
│   ├── hooks/                        # Custom hooks (~300 líneas)
│   │   ├── use-scroll-progress.ts
│   │   ├── use-mouse-position.ts
│   │   ├── use-media-query.ts
│   │   ├── use-intersection.ts
│   │   └── use-lenis.ts
│   │
│   └── types/                        # TypeScript types (~200 líneas)
│       ├── index.ts
│       ├── dashboard.ts
│       └── api.ts
│
├── public/
│   ├── fonts/                        # Variable fonts locales
│   ├── images/
│   └── sounds/                       # Efectos sonoros UI
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## DESIGN TOKENS — CHROMA v1.1 (canónico, NO modificar)

Fuente verdad: `shared/belentani-theme.css` del open-school repo.
Archivo canónico local: `C:\Users\USER\Downloads\secure-t-open-school-coupling-reparado\open-school\shared\belentani-theme.css`

```css
/* BELENTANI DESIGN SYSTEM — THEME v1.1 CHROMA · AGPLv3 · 2026-09-03
   Teoria: 60-30-10 · WCAG 2.1 AA (>=4.5:1 texto) · glassmorfismo */
:root {
  /* 60% superficie */
  --bel-bg: #0b1322;           /* navy = confianza */
  --bel-paper: #f4f7fb;
  --bel-ink: #0d1626;
  --bel-text: #e8f1ff;
  --bel-muted: #9fb3c8;

  /* 30% tecnología */
  --bel-cyan: #38e1ff;
  --bel-mint: #4ef0b0;

  /* 10% acción (lime SIEMPRE con texto ink encima) */
  --bel-lime: #b6ff2e;
  --bel-lime-ink: #0d1626;

  /* Apoyo cromático */
  --bel-coral: #ff6b5e;        /* alertas, errores */
  --bel-saffron: #ffb52e;      /* energía, warnings */
  --bel-violet: #a78bfa;       /* IA, premium */

  /* Glass */
  --bel-glass-bg: rgba(13, 22, 38, 0.55);
  --bel-glass-border: rgba(56, 225, 255, 0.18);
  --bel-glass-blur: 18px;
  --bel-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

  /* Forma */
  --radius-sm: 10px;
  --radius: 18px;
  --radius-lg: 28px;
  --radius-pill: 99px;

  /* Tipografía */
  --font-display: "Sora", system-ui, sans-serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Foco accesible */
  --focus-ring: 0 0 0 2px #38e1ff;

  /* Transitions (añadidos para motion) */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
}

/* Modo claro (solo para lectura larga) */
[data-theme="light"] {
  --bel-bg: #f4f7fb;
  --bel-text: #0d1626;
  --bel-muted: #41566d;
  --bel-glass-bg: rgba(255, 255, 255, 0.66);
  --bel-glass-border: rgba(13, 22, 38, 0.14);
  --bel-shadow: 0 8px 32px rgba(13, 22, 38, 0.10);
}
```

### Regla 60-30-10
- **60% `--bel-bg` navy** — superficie principal
- **30% `--bel-cyan`/`--bel-mint`** — tecnología, links, accents
- **10% `--bel-lime`** — CTAs, botones primarios (texto SIEMPRE `--bel-lime-ink`)
- Contrastes verificados WCAG AA (texto ≥ 4.5:1)

---

## TIPOGRAFÍA (CHROMA v1.1 — compartida en las 5 academias)

```typescript
// src/lib/fonts.ts
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'

export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})
```

**Jerarquía tipográfica:**
- Display/Hero: `Sora` 700, 72-144px (titulares, logos, números grandes)
- Headings: `Sora` 600, 32-56px
- Body: `Inter` 400/500, 16-18px (todo texto)
- Mono/Terminal: `JetBrains Mono` 400, 14px (código, labs, hashes, comandos, chips)
- Labels: `Inter` 500, 12-14px, uppercase, letter-spacing 0.05em

---

## COMPONENTES CLAVE A IMPLEMENTAR

### 1. Hero con Text Scramble + Parallax (~150 líneas)
```
- Texto "BELENTANI" en 120px+ con gradient clip mask rojo-a-púrpura
- Efecto text-scramble: caracteres random → texto final (como en la web actual)
- 3 capas parallax: fondo grid, partículas medias, texto front
- Badge "VERIFIED GLOBAL ARTIST — ENTITY ACTIVE" animado
- CTA "Enter Experience" con efecto magnético
- Terminal overlay en esquina inferior izquierda (como la web actual)
```

### 2. Cursor personalizado (~80 líneas)
```
- Dot interno 8px + ring externo 32px
- Ring se agranda sobre elementos interactivos
- Blend mode: difference sobre fondos claros
- Trail suave con spring animation (Framer Motion)
- Ocultar en móvil
```

### 3. Navigation con scroll morph (~120 líneas)
```
- Transparente en top → glass blur al scroll
- Logo "B" en círculo púrpura + "BELENTANI" text
- Links: Home, The Artist, Music, Judas, Portal, Art Gallery, Contact, Studio
- Indicador activo con glow underline
- Hamburger animado en móvil con fullscreen overlay
- Selector de idioma (PT > ES > EN > CA)
```

### 4. Music Player inline (~200 líneas)
```
- Waveform visual con Web Audio API o canvas
- Play/pause, skip, progress bar con glow
- Artwork cover con parallax tilt
- Lista de tracks con hover effects
- Integración visual con Spotify embed
```

### 5. Dashboard SaaS (~800 líneas)
```
- Sidebar colapsable con iconos Lucide
- KPI cards: Clientes, Facturas, Ingresos, Pendientes
- Sparklines en cada KPI card
- Revenue chart (Recharts BarChart) con tooltip custom
- Invoice table con sort, filter, status badges
- Activity feed con timestamps relativos
- Quick actions: Nueva Factura, Nuevo Cliente
- Period selector: Mensual/Trimestral/Anual
- Moneda EUR, formato es-ES
```

### 6. Grain Overlay SVG (~30 líneas)
```
- SVG filter con feTurbulence baseFrequency="0.65"
- Opacity 0.03-0.05, fixed position, pointer-events none
- Animación sutil de seed para efecto vivo
```

### 7. Page Transitions (~100 líneas)
```
- Fade + slide entre rutas con Framer Motion AnimatePresence
- Loading bar en top (estilo YouTube/GitHub)
- Exit: fade out 300ms → Enter: fade in + slide up 400ms
```

---

## INTERACCIONES Y ANIMACIONES

### Scroll Animations (Framer Motion)
```typescript
// Patrón para cada sección
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}
// Usar whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }}
```

### Magnetic Button
```
- onMouseMove: calcular offset desde centro del botón
- Aplicar transform translate con spring suave (stiffness: 150, damping: 15)
- onMouseLeave: volver a posición original con spring
- Escala sutil en hover: 1.02
```

### Terminal Overlay (como la web actual)
```
- Fijo en esquina inferior izquierda
- Fondo rgba(0,0,0,0.9) con borde rojo/púrpura sutil
- Texto monospace verde/rojo
- Líneas que se escriben secuencialmente (typewriter)
- Mensajes: "Analyzing user interaction patterns...", "Accessing 'Judas' core memories...", "Awaiting creative input..."
- Cursor parpadeante ">" al final
```

---

## REGLAS DE CÓDIGO

1. **TypeScript estricto** — no `any`, no `@ts-ignore`
2. **Server Components por defecto** — `"use client"` solo cuando haga falta (hooks, eventos, browser APIs)
3. **Tailwind v4** — usar `@theme` en CSS, no tailwind.config si usas v4
4. **cn() helper** — `clsx` + `tailwind-merge` para clases condicionales
5. **CVA** — `class-variance-authority` para variantes de componentes UI
6. **Barrel exports** — `components/ui/index.ts` exporta todo
7. **Colocation** — tipos, hooks y utils cerca de donde se usan
8. **No inline styles** — todo Tailwind o CSS vars
9. **Accesibilidad** — `prefers-reduced-motion`, roles ARIA, focus visible
10. **Performance** — `next/image`, `next/font`, dynamic imports para GSAP/Recharts

---

## MULTILINGÜE (orden fijo: PT > ES > EN > CA)

```typescript
// src/lib/constants.ts
export const LOCALES = ['pt', 'es', 'en', 'ca'] as const
export type Locale = typeof LOCALES[number]

// Implementar con next-intl o i18n simple con JSON files
// /messages/pt.json, /messages/es.json, /messages/en.json, /messages/ca.json
```

---

## CONTEO DE LÍNEAS ESTIMADO

| Área | Archivos | Líneas |
|------|----------|--------|
| Pages (app/) | 18 | ~1.200 |
| UI components | 12 | ~800 |
| Layout components | 6 | ~600 |
| Section components | 8 | ~1.200 |
| Dashboard components | 6 | ~1.000 |
| Effects components | 6 | ~500 |
| Hooks | 5 | ~300 |
| Lib/utils | 5 | ~400 |
| Types | 3 | ~200 |
| CSS/config | 4 | ~300 |
| **TOTAL** | **73** | **~6.500** |

---

## INSTRUCCIONES PARA CURSOR

1. **Empieza** creando el proyecto con el comando npx de arriba
2. **Configura** globals.css con las CSS variables exactas de este documento
3. **Crea** la estructura de carpetas completa (vacía primero)
4. **Implementa** en orden: lib/ → types/ → hooks/ → components/ui/ → components/effects/ → components/layout/ → components/sections/ → components/dashboard/ → app/
5. **Cada archivo** debe funcionar de forma independiente — no dejar imports rotos
6. **Testea** cada ruta antes de avanzar: `npm run dev` y verificar en browser
7. **NO** agregar fonts sin consultar — usar Inter + JetBrains Mono como base segura
8. **NO** instalar librerías extras sin que estén en este prompt
9. **El diseño oscuro es obligatorio** — no hay modo claro, todo es dark cyberpunk
10. **Mobile first** — todo responsive, breakpoints: sm(640) md(768) lg(1024) xl(1280)

---

## REPOS Y CÓDIGO EXISTENTE PARA REFERENCIA

### Proyectos locales (código fuente)
- **Proyecto base React+Vite**: `C:\Users\USER\Desktop\PROJECTOS\Belentani\belentani\` (migrar a Next.js)
- **belentani-web (Next.js 15)**: `C:\Users\USER\Desktop\PROJECTOS\belentani-web\` — ya tiene GlassPanel, MagneticButton, ExperienceCard, MainLayout
- **NOIACORE portal**: `C:\Users\USER\Desktop\PROJECTOS\noiacore-unified\` — Vite+React+Tailwind, tiene CursorGlow, DecryptText, ParticleField, Starfield, Manifesto scroll-reveal, Hero letter-by-letter
- **Cosmic SaaS**: `C:\Users\USER\Desktop\PROJECTOS\NOIACORE-ECOSISTEMA\aetheria-cosmic-saas\` — Three.js, Google GenAI
- **Python tooling**: `C:\Users\USER\Desktop\PROJECTOS\BELENTANI-HERRAMIENTAS\`
- **Skill repo**: `C:\Users\USER\Desktop\PROJECTOS\belentani7-skill-repo\` (MCP SDK, router)
- **School**: `C:\Users\USER\Desktop\PROJECTOS\_merge-school-2026-09-17\belentani-school-unificado\`

### Design System canónico
- **Spec**: `C:\Users\USER\Documents\BELENTANI-OS\09_REPORTES\BELENTANI-DESIGN-SYSTEM.md`
- **CSS theme**: `C:\Users\USER\Downloads\secure-t-open-school-coupling-reparado\open-school\shared\belentani-theme.css`
- **Lore/manifiesto**: `C:\Users\USER\Documents\BELENTANI-OS\09_REPORTES\lore.md`
- **UX principles**: `C:\Users\USER\Documents\BELENTANI-OS\09_REPORTES\ux-principles.md`
- **Repo catalog (501)**: `C:\Users\USER\Desktop\PROJECTOS\belentani-web\Docs\BELENTANI-REPOS.md`

### Componentes reutilizables ya existentes (copiar/adaptar)
- `belentani-web/components/ui/GlassPanel.tsx` — panel glassmorphism
- `belentani-web/components/ui/MagneticButton.tsx` — botón magnético
- `belentani-web/components/experiences/ExperienceCard.tsx` — card experiencia
- `noiacore-unified/src/components/CursorGlow.tsx` — cursor custom glow
- `noiacore-unified/src/components/DecryptText.tsx` — text scramble/decrypt
- `noiacore-unified/src/components/ParticleField.tsx` — campo de partículas
- `noiacore-unified/src/components/Starfield.tsx` — fondo estrellas
- `noiacore-unified/src/components/Manifesto.tsx` — scroll-reveal text
- `noiacore-unified/src/components/Marquee.tsx` — marquee horizontal
- `noiacore-unified/src/hero/NoiaHero.tsx` — hero HUD cyberpunk completo

### URLs desplegadas
- BuildAI: `https://judas-experience-13898.buildaispace.app` (web artística actual)
- Netlify: `https://belentani.netlify.app` (newsletter/contacto)
- Vercel: `https://belentani.vercel.app` (plataforma NOIACORE LAB)
- GitHub Pages: `https://belentani7.github.io` (OMEGA CORE)
- Profile: `https://belentani7-profile.vercel.app`
- SaaS: `https://belentani-saas.vercel.app`
- Base44: `https://belentani.base44.app`
- GitHub: `github.com/belentani7` (539 repos)

### Manifiesto de marca (del Manifesto.tsx)
> "Construyo en el silencio: sistemas de inteligencia abiertos, educación sin muros,
> defensas digitales y universos creativos que orbitan alrededor de un mismo núcleo
> de código libre."

### Etiquetas HUD del hero (del NoiaHero)
- "SISTEMAS ABIERTOS. INTELIGENCIA SILENCIOSA. TECNOLOGÍA ESENCIAL."
- "ARQUITECTURA DE INTELIGENCIA PARA EL FUTURO DEL CÓDIGO ABIERTO."
- "LAT 41.36 N" (coordenadas Barcelona)

---

## HALLAZGOS AWWWARDS 2025-2026 (aplicar al proyecto)

### Sites of the Year/Month ganadores:
- **Lando Norris** (SOTY 2025) — WebGL, GSAP, Rive, 2 colores (lime+black), score 8.18
- **By-Kin** — Next.js + GSAP + Strapi, editorial, smooth scroll, mask/reveal transitions
- **Shopify Renaissance** (SOTM Feb 2026) — generative painting, updates convertidos en arte
- **Cartier W&W** — Three.js, GSAP, Lenis, Web Audio API, 6 escenas 3D
- **Cerebrium** (SOTD Sep 2026) — SaaS/AI que ganó SOTD (raro para B2B)
- **Terminal Industries** — Vue, CSS, Vercel, scrollytelling empresarial

### Criterios de evaluación Awwwards:
| Criterio | Peso | Foco |
|----------|------|------|
| **Design** | 40% | Coherencia visual, tipografía, art direction |
| **Usability** | 30% | Mobile, performance, accesibilidad |
| **Creativity** | 20% | Interacciones novedosas, scroll/WebGL |
| **Content** | 10% | Calidad del contenido |

### Patrones ganadores a aplicar:
1. **GSAP ScrollTrigger** — scroll-driven narrative con pin + scrub
2. **Lenis smooth scroll** — editorial weighted scroll
3. **Kinetic typography** — variable fonts respondiendo a scroll
4. **Dark mode = identidad principal** (no toggle)
5. **Bento grid interactivo** — tiles con hover reveal video/content
6. **1px borders + sharp geometry** — precisión ingenieril vs soft shadows
7. **CSS animation-timeline** — scroll nativo sin JS donde sea posible
8. **Spring physics** — Framer Motion para UI natural
9. **SVG mask reveals** — transiciones de imagen/video
10. **Sound as narrative** — Web Audio API para soundscapes

---

*Prompt generado el 2026-09-19. Concepto: Belentani — The Judas Experience.*
*Estética: Cyberpunk oscuro, Awwwards-level, glassmorphism, neon glows, scroll animations.*
*Target: 5.000-6.500 líneas de código production-ready.*
