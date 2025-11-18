export interface YouTubePlaylistItemResponse {
  kind: "youtube#playlistItemListResponse";
  etag: string;
  items: PlaylistItem[];
  pageInfo: PageInfo;
  // nextPageToken?: string; // Incluir si se maneja paginación
}

// --- Interfaces Principales ---

export interface PlaylistItem {
  kind: "youtube#playlistItem";
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
}

// --- Interfaces Detalladas ---

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

export interface Status {
  privacyStatus: "public" | "unlisted" | "private";
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// --- Interfaces Anidadas ---

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ResourceId {
  kind: "youtube#video";
  videoId: string;
}