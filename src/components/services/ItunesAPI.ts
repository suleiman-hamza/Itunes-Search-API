import type { ItunesType, Result } from "@/types/types"

export async function ItunesSearch(search: string) :Promise<ItunesType>{
        let response = await fetch(`https://itunes.apple.com/search?term=${search}&entity=allTrack&attribute=allArtistTerm`)
        return await response.json()
}