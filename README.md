<!-- /README.md -->

<div align="center">

# 🎵 Jowy Portfolio

**Sound Designer | DJ | Producer**

  <!-- BADGES -->
  <p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Astro-0C141D?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Spotify_API-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify API" />
    <img src="https://img.shields.io/badge/SoundCloud-FF3300?style=for-the-badge&logo=soundcloud&logoColor=white" alt="SoundCloud" />
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" />
  </p>

  <h3>
    <a href="https://jowysound.com">🌐 jowysound.com</a>
  </h3>
</div>

---

## 🇪🇸 Español

### 📖 Sobre el Proyecto

**Jowy Portfolio** es una experiencia web inmersiva diseñada para Jowy, un artista multifacético (DJ, Productor y Diseñador de Espacios Sonoros). Más que una simple tarjeta de visita, este sitio actúa como un **hub centralizado y automatizado** de su actividad artística.

El objetivo principal fue crear una plataforma que refleje la estética "House/Techno" moderna y natural del artista, manteniendo al mismo tiempo la información siempre fresca sin necesidad de mantenimiento manual constante.

### ✨ Características Clave

*   **🎨 UI/UX Inmersiva:** Diseño "Dark Mode" nativo con acentos neón (`#f7a009`), tipografía *Syne* para un toque artístico, y efectos visuales avanzados como máscaras de degradado (`mask-image`) y animaciones al hacer scroll (`IntersectionObserver`).
*   **🔄 Actualización Automática (CI/CD):** La web está diseñada para reconstruirse y desplegarse semanalmente. Durante este proceso, recolecta datos frescos de las APIs, asegurando que los últimos eventos y lanzamientos estén siempre visibles.
*   **🔌 Integración Multi-API:**
    *   **Spotify & SoundCloud:** Obtención de últimas producciones, playlists y métricas.
    *   **Google Calendar:** Sincronización automática de "Gigs" y eventos futuros.
    *   **YouTube:** Feed de últimas sesiones visuales.
*   **⚡ Rendimiento Optimizado:** Uso de caché en servidor (`Map` in-memory) para minimizar latencia y respetar los límites de tasa (Rate Limits) de las APIs externas.

### 🛠️ Arquitectura y Tecnologías

El proyecto destaca por un código limpio y tipado estrictamente:

*   **Core:** Desarrollado con un framework moderno (**Astro**) y **TypeScript** para máxima robustez.
*   **Estilos:** **Tailwind CSS**. Se implementaron utilidades personalizadas en CSS para efectos de "fading" en imágenes y textos estilo neón.
*   **Gestión de Datos:**
    *   `BaseFetcher`: Una capa de abstracción sobre `fetch` que estandariza el manejo de errores HTTP y de red.
    *   `Service Layer`: Lógica de negocio separada por servicios (`spotify/auth`, `soundcloud/tracks`) para mantener el código modular.
    *   **Server-Side Caching:** Sistema de caché personalizado para almacenar tokens de autenticación y respuestas de API, reduciendo llamadas innecesarias.

### 🚀 Instalación Local

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/mrcl29/jowy-portfolio.git
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Configurar variables de entorno (`.env`):
    ```env
    SPOTIFY_CLIENT_ID=...
    SPOTIFY_CLIENT_SECRET=...
    SOUNDCLOUD_CLIENT_ID=...
    # Otras claves de API
    ```
4.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

## 🇬🇧 English

### 📖 About The Project

**Jowy Portfolio** is an immersive web experience designed for Jowy, a multifaceted artist (DJ, Producer, and Sound Space Designer). More than just a business card, this site serves as a **centralized, automated hub** for his artistic activity.

The main goal was to create a platform that reflects the artist's modern, natural "House/Techno" aesthetic while keeping information fresh without constant manual maintenance.

### ✨ Key Features

*   **🎨 Immersive UI/UX:** Native "Dark Mode" design with neon accents (`#f7a009`), *Syne* typography for an artistic touch, and advanced visual effects like gradient masks (`mask-image`) and scroll-triggered animations (`IntersectionObserver`).
*   **🔄 Automated Updates (CI/CD):** The website is architected to rebuild and deploy on a weekly schedule. During this build process, it fetches fresh data from APIs, ensuring the latest events and releases are always visible.
*   **🔌 Multi-API Integration:**
    *   **Spotify & SoundCloud:** Fetching latest tracks, playlists, and metrics.
    *   **Google Calendar:** Automatic synchronization of upcoming Gigs and events.
    *   **YouTube:** Feed of the latest visual sessions.
*   **⚡ Optimized Performance:** Implementation of server-side caching (in-memory `Map`) to minimize latency and respect external API Rate Limits.

### 🛠️ Architecture & Tech Stack

The project stands out for its clean, strictly typed code:

*   **Core:** Built with a modern framework (**Astro**) and **TypeScript** for maximum robustness.
*   **Styling:** **Tailwind CSS**. Custom CSS utilities were implemented for complex image fading effects and neon-style text.
*   **Data Management:**
    *   `BaseFetcher`: An abstraction layer over `fetch` that standardizes HTTP and network error handling.
    *   `Service Layer`: Business logic separated by services (`spotify/auth`, `soundcloud/tracks`) to keep code modular.
    *   **Server-Side Caching:** Custom caching system to store authentication tokens and API responses, reducing unnecessary external calls.

### 🚀 Local Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mrcl29/jowy-portfolio.git
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Configure environment variables (`.env`):

    ```env
    SPOTIFY_CLIENT_ID=...
    SPOTIFY_CLIENT_SECRET=...
    SOUNDCLOUD_CLIENT_ID=...
    # Other API keys
    ```

    Start development server:

    ```bash
    npm run dev
    ```

---

<div align="center">
  <p>Made with 🧡 and 🎧 by mrcl29</p>
</div>
