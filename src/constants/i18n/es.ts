// src/constants/i18n/es.ts
import { photo1, djCutPhoto, soundCutPhoto, producerPhoto } from "@/constants/photos";

export const sections = [
  {
    image: djCutPhoto,
    title: "DJ Jowy",
    color: "#065f46",
    mask: "mask-fade-top-bottom-right",
    link: "/dj"
  },
  { 
    image: producerPhoto, 
    title: "Productor",
    color: "#fde68a", 
    mask: "mask-fade-all-sides pb-30" 
  },
  {
    image: soundCutPhoto,
    title: "Técnico de Sonido",
    color: "#22d3ee",
    mask: "mask-fade-top-bottom-left",
  },
];

export const title = "Inicio"
export const description = "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional."