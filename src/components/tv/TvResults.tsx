import Results from "@/components/Results";
import MovieCard from "@/components/movies/MovieCard";
import TvCard from "@/components/tv/TvCard";

export default function TvResults({results}: { results:any[] }) {
    console.log(results[0]);
    return(
        <div className={"sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:px-36 sm:px-10 py-4 mx-auto"}>
            {/*{results.map(result =>(<MovieCard key={result.id} result={result}/>))}*/}
            {results.map((result) => (<TvCard key={result.id} tv={result}/>))}
        </div>
    )
}