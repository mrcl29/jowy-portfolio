// src/dictionaries/es.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heroSection: {
      heading: "You are Housed",
      description: "Explora mis sets y mezclas.",
    },
    bio: {
      altImage:
        "DJ Jowy pinchando en una fiesta. Está mirando hacia abajo con los cascos puestos.",
      title: "SOBRE MÍ",
      text: `Soy Jowy, DJ especializado en house y techno, y mi objetivo en cada set es simple: que  vengas a sentir la música y no pares de bailar, ‘only good people dance house music.`,
    },
    sets: {
      title: "Mis Sets",
    },
    calendar: {
      title: "Próximas Fechas",
      calendarTitle:
        "Calendario con los próximos eventos donde el DJ va a tocar.",
    },
  },
  producerPage: {
    title: "JOWY",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heroSection: {
      heading: "¡Bienvenido a mi estudio!",
      description: "Descubre mi trabajo como productor musical.",
    },
    // Añade aquí otros textos específicos de la página Producer en español
  },
  soundPage: {
    title: "SOUND DESIGNER",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heroSection: {
      heading: "Welcome to my studio!",
      description: "Discover my work as a music producer.",
    },
  },
  common: {
    creator: "Hecho por mrcl29:",
    footer: {
      copyright: "Jowy. Todos los derechos reservados.",
      privacyPolicy: "Política de privacidad",
    },
  },
  indexPage: {
    title: "Inicio",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    sections: [
      {
        image: djCutPhoto,
        title: "DJ",
        color: "#065f46",
        mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
        link: "dj", // Usamos pathSegment en lugar de link completo
      },
      {
        image: producerPhoto,
        title: "JOWY",
        color: "#fde68a",
        mask: "-translate-y-25 px-10 max-h-[70%]",
        link: "producer", // Usamos pathSegment en lugar de link completo
      },
      {
        image: soundCutPhoto,
        title: "SOUND DESIGNER",
        color: "#1b22e5",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
      },
    ],
  },
};

// Exporta el tipo del diccionario para usarlo en TypeScript
export type Dictionary = typeof import("./es").default;
