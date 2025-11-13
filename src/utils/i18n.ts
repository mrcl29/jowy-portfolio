// src/utils/i18n.ts
import { type Lang, defaultLang } from "@/../i18n.config";
import type { Dictionary } from "../dictionaries/es"; // Importa el tipo de un diccionario base

// Mapeo de idiomas a funciones de importación dinámica
const dictionaries = {
  es: () => import("../dictionaries/es"),
  en: () => import("../dictionaries/en"),
  // Añade aquí más idiomas si los implementas
};

/**
 * Carga el diccionario de textos para el idioma especificado.
 * Si el idioma no se encuentra, se utiliza el idioma por defecto.
 * @param locale El código de idioma (ej. 'es', 'en').
 * @returns Una promesa que resuelve con el objeto del diccionario.
 */
const getDictionary = async (locale: Lang): Promise<Dictionary> => {
  const dictionaryLoader = dictionaries[locale] || dictionaries[defaultLang];
  const dictionaryModule = await dictionaryLoader();
  return dictionaryModule.default;
};

export async function getI18nInfo(lang: string | undefined){
  const langParam = (lang || defaultLang) as Lang;
  const dictionary = await getDictionary(langParam);

  return { dictionary, langParam };
}
