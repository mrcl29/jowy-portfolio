// src/dictionaries/es.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ",
    heroSection: {
      heading: "¡Hola DJ!",
      description: "Explora mis sets y mezclas.",
    },
    // Añade aquí otros textos específicos de la página DJ en español
  },
  producerPage: {
    title: "Productor",
    heroSection: {
      heading: "¡Bienvenido a mi estudio!",
      description: "Descubre mi trabajo como productor musical.",
    },
    // Añade aquí otros textos específicos de la página Producer en español
  },
  common: {
    home: "Inicio",
    contact: "Contacto",
    // Añade aquí textos comunes a varias páginas
  },
  indexPage: {
    title: "Inicio",
    description: "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    sections: [
      {
        image: djCutPhoto,
        title: "DJ Jowy",
        color: "#065f46",
        mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
        link: "dj" // Usamos pathSegment en lugar de link completo
      },
      {
        image: producerPhoto,
        title: "Productor",
        color: "#fde68a",
        mask: "-translate-y-25 px-10 max-h-[70%]",
        link: "producer", // Usamos pathSegment en lugar de link completo
      },
      {
        image: soundCutPhoto,
        title: "Técnico de Sonido",
        color: "#1b22e5",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
      },
    ],
  },
};

// Exporta el tipo del diccionario para usarlo en TypeScript
export type Dictionary = typeof import('./es').default;
