// scr/constants/api.ts

const youtubeUsername = 'Itsjowy'
export const youtubeUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=${youtubeUsername}&key=${import.meta.env.GOOGLE_CLOUD_YOUTUBE_API_KEY}`