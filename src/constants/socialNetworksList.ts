import { type SocialNetworksList } from "@/types/socialNetworksList.d"
import { instagramLogo, youtubeLogo, linkedinLogo, xLogo, soundcloudLogo, spotifyLogo } from "./photos"

export const djSocialNetworksList: SocialNetworksList = [
    {name: "Instagram", url: "https://www.instagram.com/srjoel", imageUrl: instagramLogo},
    {name: "YouTube", url: "https://www.instagram.com/srjoel", imageUrl: youtubeLogo},
    {name: "SoundCloud", url: "https://www.instagram.com/srjoel", imageUrl: soundcloudLogo},
    {name: "X", url: "https://www.instagram.com/srjoel", imageUrl: xLogo, class: "w-full"},
    {name: "Spotify", url: "https://www.instagram.com/srjoel", imageUrl: spotifyLogo},
    {name: "LinkedIn", url: "https://www.instagram.com/srjoel", imageUrl: linkedinLogo},
]