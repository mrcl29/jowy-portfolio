// src/dictionaries/en.ts
import { title } from "framer-motion/client";
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heading: "YOU ARE HOUSED",
    bio: {
      altImage:
        "DJ Jowy playing in a gig. He is looking down with the headsets on.",
      title: "ABOUT ME",
      text: "I'm Jowy, a DJ specializing in house and techno, and my goal in every set is simple: that you come to feel the music and don't stop dancing. Only good people dance house music.",
    },
    sets: {
      title: "My DJ Sets",
    },
    calendar: {
      title: "Next Gigs",
      calendarTitle:
        "Calendar of the Next Events where the DJ is going to play.",
    },
  },
  producerPage: {
    title: "JOWY",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
      heading: "YOU ARE HOUSED",
  },
  soundPage: {
    title: "SOUND DESIGNER",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
      heading: "YOU ARE HOUSED",
  },
  bioPage:{
    link: "bio",
    title: "BIO",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
  },
  common: {
    contactMe: "Contáctame: ",
    creator: "Made by mrcl29:",
    footer: {
      copyright: "Jowy. All rights reserved.",
      privacyPolicy: "Privacy Policy",
    },
  },
  indexPage: {
    title: "Home",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
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
        color: "#22d3ee",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
        link: "sound",
      },
    ],
  },
};
