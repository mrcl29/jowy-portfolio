// src/server/services/spotify/auth.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { SpotifyToken } from "@/types/spotify/token.d";
import { spotifyClientId, spotifyClientSecret } from "@/server/constants";
import { getFromCache, setInCache } from "../cache";

const TOKEN_CACHE_KEY = "spotify_token";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

/**
 * Realiza la petición y devuelve el token de acceso de Spotify.
 * Comprueba si hay un token válido en caché antes de solicitar uno nuevo.
 * ESTA FUNCIÓN ESTÁ DISEÑADA PARA EJECUTARSE ÚNICAMENTE EN EL SERVIDOR.
 */
export async function getSpotifyToken(): Promise<string> {
  // 1. Comprobar el caché
  const cachedToken = getFromCache<string>(TOKEN_CACHE_KEY);
  if (cachedToken) {
    return cachedToken;
  }

  // 2. Si el caché está vacío o ha expirado, obtener un nuevo token
  const authString = Buffer.from(
    `${spotifyClientId}:${spotifyClientSecret}`
  ).toString("base64");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${authString}`,
  };

  const body = "grant_type=client_credentials";

  try {
    const res = await baseFetcher<SpotifyToken>(SPOTIFY_TOKEN_URL, {
      headers,
      method: "POST",
      body,
    });

    // Cachear el token con un búfer de 60 segundos menos que su expiración real.
    setInCache(TOKEN_CACHE_KEY, res.access_token, res.expires_in - 60);

    return res.access_token;
  } catch (error) {
    console.error("Error al obtener token de Spotify:", error);
    throw new Error("Fallo en la autenticación de Spotify");
  }
}
