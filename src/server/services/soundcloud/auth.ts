// src/server/services/soundcloud/auth.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { SoundCloudToken } from "@/types/soundcloud/token.d";
import {
  soundCloudURLGetToken,
  soundCloudAuthBody,
  soundCloudAuthHeaders,
  soundCloudClientID,
  soundCloudClientSecret,
  soundCloudAuthorization,
} from "@/server/constants";
import { getFromCache, setInCache } from "../cache";

const TOKEN_CACHE_KEY = "soundcloud_token";

/**
 * Realiza la petición y devuelve el token de acceso de SoundCloud.
 * Comprueba si hay un token válido en caché antes de solicitar uno nuevo.
 * ESTA FUNCIÓN ESTÁ DISEÑADA PARA EJECUTARSE ÚNICAMENTE EN EL SERVIDOR.
 */
export async function getSoundCloudToken(): Promise<string> {
  // 1. Comprobar el caché
  const cachedToken = getFromCache<string>(TOKEN_CACHE_KEY);
  if (cachedToken) {
    return cachedToken;
  }

  // 2. Si el caché está vacío o ha expirado, obtener un nuevo token
  //   console.log(
  //     "Token de SoundCloud caducado o no existente. Obteniendo nuevo token..."
  //   );

  const bodyData = { ...soundCloudAuthBody };
  const bodyUrlEncoded = new URLSearchParams(bodyData).toString();

  const headers = {
    ...soundCloudAuthHeaders,
    client_id: soundCloudClientID,
    client_secret: soundCloudClientSecret,
    Authorization: soundCloudAuthorization,
  };

  try {
    const res = await baseFetcher<SoundCloudToken>(soundCloudURLGetToken, {
      headers,
      method: "POST",
      body: bodyUrlEncoded,
    });

    // Cachear el token con un búfer de 60 segundos menos que su expiración real.
    setInCache(TOKEN_CACHE_KEY, res.access_token, res.expires_in - 60);

    return res.access_token;
  } catch (error) {
    console.error("Error al obtener token de SoundCloud:", error);
    throw new Error("Fallo en la autenticación de SoundCloud");
  }
}
