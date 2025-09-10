// src/constants/i18n/es.ts
import { photo1, djCutPhoto, soundCutPhoto, producerPhoto } from "../photos";

export const sections = [
  {
    image: djCutPhoto,
    title: "DJ Jowy",
    color: "#065f46",
    mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
    link: "/dj"
  },
  { 
    image: producerPhoto, 
    title: "Productor",
    color: "#fde68a", 
    mask: "-translate-y-25 px-10 max-h-[70%]" 
  },
  {
    image: soundCutPhoto,
    title: "Técnico de Sonido",
    color: "#1b22e5",
    mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
  },
];

export const title = "Inicio"
export const description = "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional."

// Página de DJ
export const djPage = {
  title: "DJ"
}