// i18n.config.ts
export const i18n = {
  es: {
    title: "Jowy Portafolio",
    description: "Portafolio de Jowy, desarrollador web y productor musical.",
  },
  en: {
    title: "Jowy Portfolio",
    description: "Jowy's portfolio, web developer and music producer.",
  },
  // Añade aquí la configuración global para otros idiomas
};

export const locales = Object.keys(i18n) as Lang[];
export type Lang = keyof typeof i18n;
export const defaultLang: Lang = "es";
