// src/constants/i18n/en.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../photos";

export const sections = [
  {
    image: djCutPhoto,
    title: "DJ Jowy",
    color: "#065f46",
    mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
    link: "/en/dj"
  },
  { 
    image: producerPhoto, 
    title: "Producer",
    color: "#fde68a", 
    mask: "-translate-y-25 px-10 max-h-[70%]" 
  },
  {
    image: soundCutPhoto,
    title: "Sound Engineer",
    color: "#22d3ee",
    mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
  },
];

export const title = "Home"
export const description = "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services."