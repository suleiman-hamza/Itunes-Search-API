import type { ItunesType, Result } from "@/types/types"

export async function ItunesSearch(search: string) :Promise<ItunesType>{
        let response = await fetch(`http://itunes.apple.com/search?term=${search}&entity=album&attribute=allArtistTerm`)
        return await response.json()
}