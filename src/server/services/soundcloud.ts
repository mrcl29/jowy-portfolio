import { baseFetcher } from "@/lib/BaseFetcher";
import type { SoundCloudTrack, SoundCloudToken, CachedToken, CachedTrack } from "@/types/soundcloud";
import {
  soundCloudURLGetToken,
  soundCloudAuthBody,
  soundCloudAuthHeaders,
  soundCloudClientID,
  soundCloudClientSecret,
  soundCloudAuthorization,
} from "@/server/constants";

// --- Lógica de Caché del Servidor ---

/** Caché para el token de autenticación. */
let tokenCache: CachedToken | null = null;

/**
 * Caché para la información de las canciones. Usamos un Map para poder almacenar múltiples canciones.
 * La clave es el ID de la canción (string), y el valor es el objeto CachedTrack.
 */
const trackCache = new Map<string, CachedTrack>();

/**
 * Función que realiza la petición y devuelve el token de acceso.
 * Comprueba si hay un token válido en caché antes de solicitar uno nuevo.
 * ESTA FUNCIÓN ESTÁ DISEÑADA PARA EJECUTARSE ÚNICAMENTE EN EL SERVIDOR.
 */
export async function getSoundCloudToken(): Promise<string> {
  const nowInSeconds = Date.now() / 1000;
  const bufferSeconds = 60; // Un búfer de 60 segundos para refrescar antes de que expire

  // 1. Comprobar el caché
  if (tokenCache && tokenCache.expiresAt > nowInSeconds + bufferSeconds) {
    console.log("Usando token de SoundCloud desde caché de servidor.");
    return tokenCache.access_token;
  }

  // 2. Si el caché está vacío o ha expirado, obtener un nuevo token
  console.log(
    "Token de SoundCloud caducado o no existente. Obteniendo nuevo token..."
  );

  const bodyData = { ...soundCloudAuthBody };
  const bodyUrlEncoded = new URLSearchParams(bodyData).toString();

  const headers = {
    ...soundCloudAuthHeaders,
    client_id: soundCloudClientID,
    client_secret: soundCloudClientSecret,
    Authorization: soundCloudAuthorization,
  };

  try {
    const res = await baseFetcher<SoundCloudToken>(
      soundCloudURLGetToken,
      {
        headers,
        method: "POST",
        body: bodyUrlEncoded,
      }
    );

    const newExpiresAt = nowInSeconds + res.expires_in;

    tokenCache = {
      access_token: res.access_token,
      expiresAt: newExpiresAt,
    };

    console.log("Nuevo token de SoundCloud obtenido y cacheado en servidor.");
    return res.access_token;
  } catch (error) {
    console.error("Error al obtener token de SoundCloud:", error);
    tokenCache = null;
    throw new Error("Fallo en la autenticación de SoundCloud");
  }
}

// --- Lógica de Obtención de Datos ---

/**
 * Obtiene la información de una canción específica de SoundCloud por su ID.
 * @param trackId El ID de la canción a buscar.
 * @returns El objeto completo de la canción (`SoundCloudTrack`) o `null` si no se encuentra o hay un error.
 */
export async function getSoundCloudSongInfo(
  trackId: string | number
): Promise<SoundCloudTrack | null> {
  const trackIdStr = String(trackId);
  if (!trackIdStr) {
    console.error("getSoundCloudSongInfo: Se requiere un trackId.");
    return null;
  }

  const nowInSeconds = Date.now() / 1000;
  const cacheDurationSeconds = 3600; // Cachear durante 1 hora (3600 segundos)

  // 1. Comprobar la caché de la canción
  const cachedSong = trackCache.get(trackIdStr);
  if (cachedSong && cachedSong.expiresAt > nowInSeconds) {
    console.log(`Usando info de la canción ${trackIdStr} desde caché de servidor.`);
    return cachedSong.track;
  }

  console.log(
    `Info de la canción ${trackIdStr} no encontrada en caché o expirada. Obteniendo de la API...`
  );

  try {
    // 2. Si no está en caché, obtener token y luego la información
    const token = await getSoundCloudToken();
    const trackInfoURL = `https://api.soundcloud.com/tracks/${trackId}`;

    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };

    const res = await baseFetcher<SoundCloudTrack>(
      trackInfoURL,
      {
        headers,
        method: "GET",
      }
    );

    // 3. Almacenar el resultado en la caché con su tiempo de expiración
    const newExpiresAt = nowInSeconds + cacheDurationSeconds;
    trackCache.set(trackIdStr, {
      track: res,
      expiresAt: newExpiresAt,
    });

    console.log(`Info de la canción ${trackIdStr} cacheada en servidor por 1 hora.`);
    return res;

  } catch (error) {
    // Si hay un error, es importante no cachear un resultado fallido.
    // Eliminamos cualquier entrada antigua que pudiera existir para reintentar en la próxima llamada.
    trackCache.delete(trackIdStr);
    console.error(`Error al obtener información de la canción ${trackIdStr}:`, error);
    return null;
  }
}
