// src/dictionaries/es.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ Jowy",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heroSection: {
      heading: "¡Hola DJ!",
      description: "Explora mis sets y mezclas.",
    },
    bio: {
      altImage: "DJ Jowy pinchando en una fiesta. Está mirando hacia abajo con los cascos puestos.",
      title: "Biografía",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris odio sapien cubilia tellus sociosqu, quis proin iaculis auctor bibendum ligula. Feugiat diam ultrices proin commodo odio facilisis ac ornare sed, fermentum purus consequat ante laoreet primis lacus vivamus semper nascetur, viverra facilisi pulvinar potenti convallis sagittis ridiculus dictumst. Sapien phasellus luctus inceptos sem ultricies sollicitudin semper lacinia, libero mollis primis sociosqu tempus vestibulum aptent etiam nulla, risus nisl vel nunc urna vehicula suspendisse. Magna nunc tristique urna lobortis ultrices hac risus porta class, augue viverra montes fermentum diam orci habitant auctor conubia aliquet, sociosqu molestie pretium primis iaculis metus congue cras.",
    },
    sets: {
      title: "Mis Sets",
    },
    calendar: {
      title: "Próximas Fechas",
      calendarTitle: "Calendario con los próximos eventos donde el DJ va a tocar."
    },
  },
  producerPage: {
    title: "UGFLOWERS",
    description:
      "Jowy: DJ, productor y técnico de sonido. Explora mi portafolio de música, producción de tracks y servicios de audio profesional.",
    heroSection: {
      heading: "¡Bienvenido a mi estudio!",
      description: "Descubre mi trabajo como productor musical.",
    },
    // Añade aquí otros textos específicos de la página Producer en español
  },
  common: {
    home: "Inicio",
    contact: "Contacto",
    modalTitle: "Contact Form",
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
        title: "DJ Jowy",
        color: "#065f46",
        mask: "mask-fade-top-bottom-right translate-y-20 max-h-full",
        link: "dj", // Usamos pathSegment en lugar de link completo
      },
      {
        image: producerPhoto,
        title: "UGFLOWERS",
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
export type Dictionary = typeof import("./es").default;
