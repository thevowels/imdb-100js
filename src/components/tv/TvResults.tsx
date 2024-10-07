import Results from "@/components/Results";

export default function TvResults(results:any) {
    return(
        <div>
            Tv Results
            =========
            {results.length}
            ******
            {typeof(results)}

            {/*{results.map((result:any) => {<div>{result.original_name}</div>})}*/}

        </div>
    )
}