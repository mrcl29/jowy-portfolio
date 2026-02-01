// src/server/services/youtube/playlist.ts
import { baseFetcher } from "@/lib/BaseFetcher";
import type { YouTubePlaylistItemResponse } from "@/types/youtube/playlist.d";
import { getFromCache, setInCache } from "@/server/services/cache";
import { youtubeApiKey } from "@/server/constants";

const YOUTUBE_PLAYLIST_CACHE_DURATION_SECONDS = 3600; // 1 hora

export async function getPlaylist(
  playlistId: string,
  maxResults = 50,
  part = "contentDetails,snippet,status"
): Promise<YouTubePlaylistItemResponse | null> {
  //   console.log("---------- getPlaylist ----------");
  try {
    // 1. Comprobar la caché para la lista
    const cacheKey = `youtube_playlist_${playlistId}_maxresults${maxResults}_part${part}`;
    const cachedPlaylists = getFromCache<YouTubePlaylistItemResponse>(cacheKey);
    if (cachedPlaylists) {
      return cachedPlaylists;
    }

    // 2. Si no está en caché, obtener la información de la playtlist
    const tracksURL = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&maxResults=${maxResults}&part=${part}&key=${youtubeApiKey}`;

    // console.log(tracksURL);

    const res = await baseFetcher<YouTubePlaylistItemResponse>(tracksURL, {
      headers: {
        accept: "application/json",
      },
      method: "GET",
    });

    // 3. Almacenar el resultado en la caché
    setInCache(cacheKey, res, YOUTUBE_PLAYLIST_CACHE_DURATION_SECONDS);
    return res;
  } catch (error) {
    console.error(
      `Error al obtener la playlist de YouTube ${playlistId}:`,
      error
    );
    return null;
  }
}
