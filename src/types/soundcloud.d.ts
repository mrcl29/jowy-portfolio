/**
 * Define los tipos de datos devueltos por la API de SoundCloud.
 * El uso de un archivo .d.ts permite que estos tipos estén disponibles
 * globalmente en el proyecto sin necesidad de importaciones explícitas si se configura en tsconfig.json,
 * o simplemente para una mejor organización.
 */

interface SoundCloudToken {
  access_token: string;
  expires_in: number; // Duración en segundos
  token_type: string;
  scope: string;
}

// Interfaz para nuestro caché interno (incluye la marca de tiempo de expiración)
interface CachedToken {
  access_token: string;
  expiresAt: number; // Almacenará el tiempo UNIX en segundos
}

/**
 * Interfaz para el objeto 'user' dentro de una pista de SoundCloud.
 * Contiene información sobre el creador de la pista.
 */
export interface SoundCloudUser {
  id: number;
  username: string;
  permalink: string;
  uri: string;
  avatar_url: string;
  city: string | null;
  country: string | null;
  followers_count: number;
  followings_count: number;
  track_count: number;
  [key: string]: any; // Permitir otros campos no definidos
}

/**
 * Interfaz principal para una pista individual de SoundCloud (Track).
 * Incluye los atributos más importantes para la reproducción y visualización.
 */
export interface SoundCloudTrack {
  kind: "track";
  id: number;
  urn: string;
  created_at: string;
  duration: number; // En milisegundos
  title: string;
  description: string | null;
  genre: string;
  tag_list: string;
  permalink_url: string;
  artwork_url: string | null;
  stream_url: string;
  waveform_url: string;
  user: SoundCloudUser;
  playback_count: number;
  download_count: number;
  favoritings_count: number;
  comment_count: number;
  streamable: boolean;
  downloadable: boolean;
  [key: string]: any; // Permitir otros campos no definidos
}

/**
 * Interfaz para los datos de la canción cacheados.
 * Incluye la información de la pista y cuándo expira la caché.
 */
interface CachedTrack {
  track: SoundCloudTrack;
  expiresAt: number; // Tiempo UNIX en segundos
}