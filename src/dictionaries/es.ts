// src/dictionaries/es.ts
import { image, title } from "framer-motion/client";
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí
import { colabIcon, mezclaIcon, masteringIcon } from "@/constants/icons";

export default {
  djPage: {
    title: "DJ",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heading: "YOU ARE HOUSED",
    bio: {
      altImage:
        "DJ Jowy pinchando en una fiesta. Está mirando hacia abajo con los cascos puestos.",
      title: "SOBRE MÍ",
      text: `Soy Jowy, DJ especializado en house y techno, y mi objetivo en cada set es simple: que  vengas a sentir la música y no pares de bailar. Only good people dance house music.`,
    },
    sets: {
      title: "MIS SETS",
    },
    calendar: {
      title: "PRÓXIMAS FECHAS",
      calendarTitle:
        "Calendario con los próximos eventos donde el DJ va a tocar.",
    },
  },
  producerPage: {
    title: "JOWY",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heading: "FEEL THE SOUND",
    discography: {
      title: "DISCOGRAFÍA",
    },
    services: {
      title: "SERVICIOS",
      list: [
        {
          image: colabIcon,
          name: "Colaboración",
        },
        {
          image: mezclaIcon,
          name: "Mezcla",
        },
        {
          image: masteringIcon,
          name: "Masterización",
        },
      ],
    },
    store: {
      title: "TIENDA",
    },
    bio: {
      altImage:
        "DJ Jowy pinchando en una fiesta. Está mirando hacia abajo con los cascos puestos.",
      title: "SOBRE MÍ",
      text: `Soy Jowy, productor de música electrónica especializado en house y techno. Mi pasión es crear sonidos que conecten con las emociones, explorando texturas, ritmos y atmósferas que hagan que cada track sea un viaje único. Para mí, producir no es solo hacer música, es contar historias con cada beat, cada línea de bajo y cada melodía, invitando a quien escucha a sentir y disfrutar de la experiencia sonora.`,
    },
  },
  soundPage: {
    title: "SOUND DESIGNER",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heading: "YOU ARE HOUSED",
    media: {
      title: "Media",
    },
    design: {
      title: "Diseño",
    },
    tools: {
      title: "Habilidades y Herramientas",
    },
    bio: {
      altImage:
        "DJ Jowy pinchando en una fiesta. Está mirando hacia abajo con los cascos puestos.",
      title: "SOBRE MÍ",
      text: `Soy Jowy, sound designer y técnico de sonido, apasionado por dar forma a cada detalle del audio. Me dedico a crear y moldear sonidos que transmiten emociones, desde efectos sutiles hasta paisajes sonoros completos, cuidando que cada elemento tenga claridad, profundidad y potencia. Mi objetivo es que el sonido no solo se escuche, sino que se sienta, convirtiendo cada proyecto en una experiencia envolvente e inolvidable.`,
    },
  },
  bioPage: {
    link: "bio",
    title: "BIO",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    text: `Desde muy joven, la música ha sido mi **motor y mi inspiración**. Comencé explorando sonidos, experimentando con mezclas y descubriendo cómo cada ritmo podía generar emociones. Con el tiempo, esa curiosidad se transformó en pasión y profesionalidad: me formé en producción musical, sonido para audiovisuales y técnicas de diseño sonoro, buscando siempre **llevar el audio más allá de lo esperado**.

<br />

Hoy, como **DJ, productor y sound designer**, combino técnica, creatividad y emoción para crear experiencias únicas. En mis sets de house y techno, busco que la gente **venga a la pista a bailar, sentir la música y disfrutar cada momento**. Como productor y diseñador de sonido, exploro texturas, atmósferas y detalles que hagan que cada proyecto sea **inolvidable**.

<br />

Mi camino ha sido de aprendizaje constante, de probar, equivocarse y mejorar, siempre con un objetivo claro: **convertir la música y el sonido en algo que se sienta, se viva y se recuerde**.`,
  },
  common: {
    copyToClipboard: "Copiar al portapapeles",
    contactMe: "Contáctame: ",
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

// Exporta el tipo del diccionario para usarlo en TypeScript
export type Dictionary = typeof import("./es").default;
