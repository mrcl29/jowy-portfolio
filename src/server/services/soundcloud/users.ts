// src/server/services/soundcloud/users.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { SoundCloudUser } from "@/types/soundcloud/user.d";
import { getSoundCloudToken } from "./auth";
import { getFromCache, setInCache } from "./cache";

const USER_CACHE_DURATION_SECONDS = 3600; // 1 hora

/**
 * Obtiene la información de un usuario específico de SoundCloud por su nombre de usuario.
 * @param userName El nombre del usuario a buscar.
 * @returns El objeto completo del usuario (`SoundCloudUser`) o `null` si no se encuentra o hay un error.
 */
export async function getUserInfo(
  user: string | number
): Promise<SoundCloudUser | null> {
  const userStr = String(user);
  if (!userStr) {
    console.error("getUserInfo: Se requiere un nombre de usuario.");
    return null;
  }

  const cacheKey = `user_${userStr}`;

  // 1. Comprobar la caché del usuario
  const cachedUser = getFromCache<SoundCloudUser>(cacheKey);
  if (cachedUser) {
    return cachedUser;
  }

  try {
    // 2. Si no está en caché, obtener token y luego la información
    const token = await getSoundCloudToken();
    const userInfoURL = `https://api.soundcloud.com/resolve?url=https://soundcloud.com/${userStr}`;

    const res = await baseFetcher<SoundCloudUser>(userInfoURL, {
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
      method: "GET",
    });

    // 3. Almacenar el resultado en la caché
    setInCache(cacheKey, res, USER_CACHE_DURATION_SECONDS);
    return res;
  } catch (error) {
    console.error(`Error al obtener información de la canción ${userStr}:`, error);
    return null;
  }
}
