import Results from "@/components/Results";
import TvFooter from "@/components/tv/TvFooter";
import TvResults from "@/components/tv/TvResults";

export default async function Page({searchParams}:{searchParams: { page?:number,genre?:string } }) {
    const page = searchParams.page || 1;
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&page=${page}`).then(res => res.json());

    return(
        <div className={"align-middle content-center"}>
            <TvResults results={res.results}/>

        </div>
    )
}