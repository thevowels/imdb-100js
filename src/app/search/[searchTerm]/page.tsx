import MovieCard from "@/components/movies/MovieCard";
import Results from "@/components/Results";

export default async function Page({params}:{params:{searchTerm:string}}){

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`,{}).then(res => res.json())
    const results = data.results
    console.log(results)
    // if(!res.ok){
    //     throw new Error("Failed to fetch data from tmdb")
    // }
    return(
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center font-bold pt-6">No results for {params.searchTerm}</h1>
            )}
            {results && results.length > 0 && (
                <Results results={results} />
            )}
        </div>
    )

}