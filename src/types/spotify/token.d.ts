/**
 * Define los tipos de datos devueltos por la API de Spotify.
 * El uso de un archivo .d.ts permite que estos tipos estén disponibles
 * globalmente en el proyecto sin necesidad de importaciones explícitas si se configura en tsconfig.json,
 * o simplemente para una mejor organización.
 */

export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}
