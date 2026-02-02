// src/server/services/spotify/tracks.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { TopTracks, Track } from "@/types/spotify/topTracks.d";
import { getSpotifyToken } from "./auth";
import { getFromCache, setInCache } from "../cache";
import { spotifyArtistId } from "@/server/constants";

const ARTIST_TOP_TRACKS_CACHE_DURATION_SECONDS = 3600; // 1 hora

/**
 * Obtiene las canciones más populares de un artista en Spotify.
 * @returns Un array de canciones (`Track[]`) o `null` si hay un error.
 */
export async function getArtistTopTracks(): Promise<Track[] | null> {
  if (!spotifyArtistId) {
    console.error(
      "getArtistTopTracks: No se ha definido un SPOTIFY_ARTIST_ID."
    );
    return null;
  }

  try {
    const cacheKey = `spotify_top_tracks_${spotifyArtistId}`;
    // 1. Comprobar la caché para la lista de canciones
    const cachedTracks = getFromCache<Track[]>(cacheKey);
    if (cachedTracks) {
      return cachedTracks;
    }

    // 2. Si no está en caché, obtener token y luego la información de las canciones
    const token = await getSpotifyToken();
    const tracksURL = `https://api.spotify.com/v1/artists/${spotifyArtistId}/top-tracks?market=ES`;

    const res = await baseFetcher<TopTracks>(tracksURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });

    // 3. Almacenar el resultado en la caché y devolverlo
    setInCache(cacheKey, res.tracks, ARTIST_TOP_TRACKS_CACHE_DURATION_SECONDS);
    return res.tracks;
  } catch (error) {
    console.error(
      `Error al obtener las top tracks del artista ${spotifyArtistId}:`,
      error
    );
    return null;
  }
}
