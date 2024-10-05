import MovieCard from "@/components/movies/MovieCard";

export default function Results({results}: { results:any[] }){
    console.log(results)


    if(!Array.isArray(results)){
        return(
            <div> Error on results</div>
        )
    }
    return(
        <div className={"sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:px-36 sm:px-10 py-4 mx-auto" }>
            {results.map(result => (<MovieCard key={result.id} result={result}/>))}
        </div>
    )
}