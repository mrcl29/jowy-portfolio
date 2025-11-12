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