// src/constants/i18n/index.ts
import * as es from "./es";
import * as en from "./en";

export const i18n = { es, en };
export type Lang = keyof typeof i18n;
