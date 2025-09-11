// scr/api/youtubeApi.ts
import requestApi from "@/api/requestApi";
import { youtubeUrl } from "@/constants/api"

export default function getYoutubeInfo(){
    const data = requestApi(youtubeUrl);

    console.log(data)
}