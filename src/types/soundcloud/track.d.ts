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