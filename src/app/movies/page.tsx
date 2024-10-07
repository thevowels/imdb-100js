import {useSearchParams} from "next/navigation";
import Movies from "@/components/movies/Movies";
import Results from "@/components/Results";
import MoviesFooter from "@/components/movies/MoviesFooter";

export default async function Page({searchParams}:{searchParams: { page?:number,genre?:string } }) {
    const page = searchParams.page || 1;
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`).then(res => res.json());

    return(
        <div className={"align-middle content-center"}>
            <Results results={res.results}/>
            <MoviesFooter/>

        </div>
    )
}