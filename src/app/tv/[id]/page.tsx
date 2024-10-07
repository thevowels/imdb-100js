import {format, parse} from "date-fns";
import {Tv} from "@/utils/Tv";

export default async function Page({params}: {params:{id:string}}) {

    const tvId = params.id;
    const tv: Tv = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.API_KEY}&language=en-US`)
        .then(res => res.json())
    let release_date = parse(tv.first_air_date, 'yyyy-MM-dd', new Date());
    const releasedDate =format(release_date, "MMM d, yyyy");

    return(
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}