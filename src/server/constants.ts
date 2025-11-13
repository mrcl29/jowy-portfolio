// scr/pages/api/apiConstants.ts

// const youtubeUsername = 'Itsjowy'
// export const youtubeUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=${youtubeUsername}&key=${import.meta.env.GOOGLE_CLOUD_YOUTUBE_API_KEY}`

export const soundCloudURLGetToken = `https://secure.soundcloud.com/oauth/token`;
export const soundCloudURLGetTrackinfo = `https://api.soundcloud.com/tracks/`;
export const soundCloudAuthHeaders = {
  accept: "application/json; charset=utf-8",
  "Content-Type": "application/x-www-form-urlencoded",
};
export const soundCloudAuthBody = { grant_type: "client_credentials" };
export const soundCloudClientID = import.meta.env.SOUNDCLOUD_CLIENT_ID;
export const soundCloudClientSecret = import.meta.env.SOUNDCLOUD_CLIENT_SECRET;
export const soundCloudAuthorization = import.meta.env.SOUNDCLOUD_AUTHORIZATION;
export const soundCloudUserId = parseInt(import.meta.env.SOUNDCLOUD_USER_ID, 10);