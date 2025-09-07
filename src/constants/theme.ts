// Tipos de tema permitidos
export type Theme = "light" | "dark";

// Iconos asociados a cada tema
export const THEME_ICONS: Record<Theme, string> = {
  light: "/theme/light.svg",
  dark: "/theme/dark.svg",
} as const;
