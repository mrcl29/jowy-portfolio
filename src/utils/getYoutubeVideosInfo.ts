import { youtubePlaylistSetId } from "@/server/constants";
import { getPlaylist } from "@/server/services/youtube/playlist";
import { type YoutubeVideoInfo } from "@/types/youtube/video.d";

export async function getYoutubeSetsInfo(): Promise<
  YoutubeVideoInfo[] | undefined
> {
  const playlistInfo = await getPlaylist(youtubePlaylistSetId);

  if (!playlistInfo) {
    return []; // Return an empty array if playlistInfo is null or undefined
  }

  let videosInfo: YoutubeVideoInfo[] = [];

  videosInfo = playlistInfo.items.map((item) => ({
    videoId: item.contentDetails.videoId,
    title: item.snippet.title,
  }));

  return videosInfo;
}
