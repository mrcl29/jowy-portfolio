// src/server/services/soundcloud/index.ts
import { getUserTracks } from "./tracks";
import { getUserInfo } from "./users";

/**
 * Objeto que agrupa todos los servicios de la API de SoundCloud.
 * Esto proporciona un único punto de entrada para el resto de la aplicación.
 */
export const soundCloudApi = {
  tracks: {
    getFromUser: getUserTracks,
  },
  users: {
    getInfo: getUserInfo,
  },
};
