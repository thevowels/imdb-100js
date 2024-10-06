import {Suspense} from "react";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;




export default async function Home({searchParams}:{searchParams:any}) {
    const genre = searchParams.genre || "trending";

    const res = await fetch(`https://api.themoviedb.org/3/${genre === 'topRated' ? 'movie/top_rated' : 'trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:180}});

    if(!res.ok){
        throw new Error('Failed to fetch movie');
    }

    const data = await res.json();
  return (
      <Suspense>
          <div>
              {/*<div>*/}
               <Results results={data.results}/>

          </div>
      </Suspense>
  );
}
