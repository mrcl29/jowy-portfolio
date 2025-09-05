// i18n.config.ts
import * as es from "./src/constants/i18n/es";
import * as en from "./src/constants/i18n/en";

export const defaultLang = "es";
export const i18n = { es, en };
export type Lang = keyof typeof i18n;
