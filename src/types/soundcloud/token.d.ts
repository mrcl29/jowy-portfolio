/**
 * Define los tipos de datos devueltos por la API de SoundCloud.
 * El uso de un archivo .d.ts permite que estos tipos estén disponibles
 * globalmente en el proyecto sin necesidad de importaciones explícitas si se configura en tsconfig.json,
 * o simplemente para una mejor organización.
 */

export interface SoundCloudToken {
  access_token: string;
  expires_in: number; // Duración en segundos
  token_type: string;
  scope: string;
}