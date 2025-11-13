// src/dictionaries/en.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ",
    description: "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heroSection: {
      heading: "Hello DJ!",
      description: "Explore my sets and mixes.",
    },
  },
  producerPage: {
    title: "Producer",
    description: "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heroSection: {
      heading: "Welcome to my studio!",
      description: "Discover my work as a music producer.",
    },
  },
  common: {
    home: "Home",
    contact: "Contact",
  },
  indexPage: {
    title: "Home",
    description: "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
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
        title: "Producer",
        color: "#fde68a",
        mask: "-translate-y-25 px-10 max-h-[70%]",
        link: "producer" // Usamos pathSegment en lugar de link completo
      },
      {
        image: soundCutPhoto,
        title: "Sound Engineer",
        color: "#22d3ee",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
      },
    ],
  },
};
