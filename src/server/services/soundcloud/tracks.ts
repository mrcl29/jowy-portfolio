// src/server/services/soundcloud/tracks.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { SoundCloudTrack } from "@/types/soundcloud/track.d";
import { getSoundCloudToken } from "./auth";
import { getFromCache, setInCache } from "./cache";
import { getUserInfo } from "./users";

const USER_TRACKS_CACHE_DURATION_SECONDS = 3600; // 1 hora

/**
 * Obtiene la lista de canciones de un usuario de SoundCloud.
 * @param user Nombre de usuario o id del usuario.
 * @param limit El número máximo de canciones a devolver.
 * @param offset El número de canciones a saltar (para paginación).
 * @returns Un array de canciones (`SoundCloudTrack[]`) o `null` si hay un error.
 */
export async function getUserTracks(
  user: string | number,
  limit = 10,
  offset = 0
): Promise<SoundCloudTrack[] | null> {
  try {
    let userId: number | undefined = undefined;
    // 1. Obtener la información del usuario para conseguir su ID
    if (typeof user === "string") {
      // Si nos dan su nombre intentaremos descubrir su id
      const userInfo = await getUserInfo(user);
      if (!userInfo) {
        console.error(
          `getUserTracks: No se pudo encontrar al usuario ${user}.`
        );
        return null;
      }
      userId = userInfo.id;
    } else {
      userId = user;
    }

    // 2. Comprobar la caché para la lista de canciones de este usuario
    const cacheKey = `user_tracks_${userId}_limit${limit}_offset${offset}`;
    const cachedTracks = getFromCache<SoundCloudTrack[]>(cacheKey);
    if (cachedTracks) {
      return cachedTracks;
    }

    // 3. Si no está en caché, obtener token y luego la información de las canciones
    const token = await getSoundCloudToken();
    const tracksURL = `https://api.soundcloud.com/users/${userId}/tracks?limit=${limit}&offset=${offset}`;

    const res = await baseFetcher<SoundCloudTrack[]>(tracksURL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });

    // 4. Almacenar el resultado en la caché
    setInCache(cacheKey, res, USER_TRACKS_CACHE_DURATION_SECONDS);
    return res;
  } catch (error) {
    console.error(
      `Error al obtener las canciones del usuario ${user}:`,
      error
    );
    return null;
  }
}
