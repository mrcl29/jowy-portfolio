// Tipos de tema permitidos
export type Theme = "light" | "dark";

// Iconos asociados a cada tema
export const THEME_ICONS: Record<Theme, string> = {
  light: "/theme/light.svg",
  dark: "/theme/dark.svg",
} as const;

// Función para obtener el tema inicial según preferencia o localStorage
export const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return stored ?? (prefersDark ? "dark" : "light");
};
