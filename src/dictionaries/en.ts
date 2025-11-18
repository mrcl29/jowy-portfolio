// src/dictionaries/en.ts
import { djCutPhoto, soundCutPhoto, producerPhoto } from "../constants/photos"; // Asumiendo que las fotos están aquí

export default {
  djPage: {
    title: "DJ",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heroSection: {
      heading: "Hello DJ!",
      description: "Explore my sets and mixes.",
    },
    bio: {
      altImage:
        "DJ Jowy playing in a gig. He is looking down with the headsets on.",
      title: "Biography",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris odio sapien cubilia tellus sociosqu, quis proin iaculis auctor bibendum ligula. Feugiat diam ultrices proin commodo odio facilisis ac ornare sed, fermentum purus consequat ante laoreet primis lacus vivamus semper nascetur, viverra facilisi pulvinar potenti convallis sagittis ridiculus dictumst. Sapien phasellus luctus inceptos sem ultricies sollicitudin semper lacinia, libero mollis primis sociosqu tempus vestibulum aptent etiam nulla, risus nisl vel nunc urna vehicula suspendisse. Magna nunc tristique urna lobortis ultrices hac risus porta class, augue viverra montes fermentum diam orci habitant auctor conubia aliquet, sociosqu molestie pretium primis iaculis metus congue cras.",
    },
    sets: {
      title: "My DJ Sets",
    },
    calendar: {
      title: "Next Gigs",
      calendarTitle: "Calendar of the Next Events where the DJ is going to play."
    },
  },
  producerPage: {
    title: "UGFLOWERS",
    description:
      "Jowy: DJ, producer and sound engineer. Explore my portfolio of music, track production and professional audio services.",
    heroSection: {
      heading: "Welcome to my studio!",
      description: "Discover my work as a music producer.",
    },
  },
  common: {
    home: "Home",
    contact: "Contact",
    modalTitle: "Contact Form",
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
        title: "Sound Engineer",
        color: "#22d3ee",
        mask: "mask-fade-top-bottom-left translate-y-30 -translate-x-15 max-h-[90%]",
      },
    ],
  },
};
