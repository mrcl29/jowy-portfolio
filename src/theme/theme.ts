// src/constants/theme.ts
import { darkIcon, lightIcon, homeDarkIcon, homeLightIcon } from "@/constants/themeIcons";
import { type Theme } from "@/types/theme.d";

export const THEME_ICONS: Record<Theme, ImageMetadata> = {
  light: darkIcon,
  dark: lightIcon,
} as const;

export const HOME_ICONS: Record<Theme, ImageMetadata> = {
  light: homeLightIcon,
  dark: homeDarkIcon,
} as const;

export function getCurrentTheme(): Theme {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let currentTheme: Theme =
    storedTheme ??
    (prefersDark
      ? "dark"
      : document.documentElement.classList.contains("dark")
        ? "dark"
        : "light");

  return currentTheme;
}

export const updateTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "github-dark-default" : "github-light-default"
  );
  localStorage.setItem("theme", theme);

  // Emitir evento global
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
};
