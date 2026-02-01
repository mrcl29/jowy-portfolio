// src/dictionaries/en.ts
import { title } from "framer-motion/client";
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí
import { colabIcon, mezclaIcon, masteringIcon } from "@/constants/icons";

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
      title: "MY DJ SETS",
    },
    calendar: {
      title: "NEXT GIGS",
      calendarTitle:
        "Calendar of the Next Events where the DJ is going to play.",
    },
  },
  producerPage: {
    title: "JOWY",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heading: "FEEL THE SOUND",
    discography: {
      title: "DISCOGRAPHY",
    },
    services: {
      title: "SERVICES",
      list: [
        {
          image: colabIcon,
          name: "Colab",
        },
        {
          image: mezclaIcon,
          name: "Mixing",
        },
        {
          image: masteringIcon,
          name: "Mastering",
        },
      ],
    },
    store: {
      title: "STORE",
    },
    bio: {
      altImage:
        "DJ Jowy playing in a gig. He is looking down with the headsets on.",
      title: "ABOUT ME",
      text: "I'm Jowy, an electronic music producer specializing in house and techno. My passion is creating sounds that connect with emotions, exploring textures, rhythms, and atmospheres that make each track a unique journey. For me, producing isn't just about making music; it's about telling stories with every beat, every bassline, and every melody, inviting the listener to feel and enjoy the sonic experience.",
    },
  },
  soundPage: {
    title: "SOUND DESIGNER",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heading: "YOU ARE HOUSED",
    bio: {
      altImage:
        "DJ Jowy playing in a gig. He is looking down with the headsets on.",
      title: "ABOUT ME",
      text: "I'm Jowy, a sound designer and sound engineer, passionate about shaping every detail of audio. I dedicate myself to creating and molding sounds that convey emotions, from subtle effects to complete soundscapes, ensuring that each element has clarity, depth, and power. My goal is for sound not only to be heard, but to be felt, transforming each project into an immersive and unforgettable experience.",
    },
  },
  bioPage: {
    link: "bio",
    title: "BIO",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    text: `From a very young age, music has been my **engine and my inspiration**. I started out exploring sounds, experimenting with mixes, and discovering how every rhythm could trigger emotions. Over time, that curiosity transformed into passion and professionalism: I trained in music production, audiovisual sound, and sound design techniques, always seeking to **take audio beyond the expected**.

<br />

Today, as a **DJ, producer, and sound designer**, I combine technique, creativity, and emotion to create unique experiences. In my House and Techno sets, my goal is for people to **hit the dance floor to move, feel the music, and enjoy every single moment**. As a producer and sound designer, I explore textures, atmospheres, and details that make every project **unforgettable**.

<br />

My journey has been one of constant learning—of testing, making mistakes, and improving—always with a clear objective: **to turn music and sound into something that is felt, lived, and remembered**.`,
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
        color: "#FFFFFF",
        mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
        link: "dj", // Usamos pathSegment en lugar de link completo
        neonGlowColor: "#ffffff", // Color para el efecto neón
      },
      {
        image: producerPhoto,
        title: "JOWY",
        color: "#b616a8",
        mask: "-translate-y-25 px-10 max-h-[70%]",
        link: "producer", // Usamos pathSegment en lugar de link completo
        neonGlowColor: "#b616a8",
      },
      {
        image: soundCutPhoto,
        title: "SOUND DESIGNER",
        color: "#1c22df",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
        link: "sound",
        neonGlowColor: "#1c22df",
      },
    ],
  },
};
