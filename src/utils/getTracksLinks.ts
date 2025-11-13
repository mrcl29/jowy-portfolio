import { soundCloudUserId } from "@/server/constants";
import { getUserTracks } from "@/server/services/soundcloud/tracks";

export default async function getTracksLinks(): Promise<string[]> {
  const tracksInfo = await getUserTracks(soundCloudUserId);

  if (!tracksInfo) {
    return []; // Return an empty array if tracksInfo is null or undefined
  }

  // 1. Filter tracks that meet the duration condition (less than 600,000 milliseconds, or 10 minutes).
  const shortTracks = tracksInfo.filter((track) => track.duration < 600000);

  // 2. Map the resulting array to extract only the permalink_url.
  return shortTracks.map((track) => track.permalink_url);
}
