import Image from "next/image";
import {parse, format } from "date-fns"

import DisplayMovie from "@/components/movies/DisplayMovie";


export default async function Page({params}: {params: {id: string}}) {
    const movieId = params.id
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
                                .then(res => res.json())
    let release_date = parse(movie.release_date, 'yyyy-MM-dd', new Date());
    const releasedDate =format(release_date, "MMM d, yyyy");

    console.log(movie)

    return(
        <div className={"w-full pb-14"}>
            <div
                className={"p-4 md:pt-8 flex flex-col  md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6"}>
                <Image alt={movie.title}
                       src={"https://image.tmdb.org/t/p/original" + (movie.backdrop_path || movie.poster_path)}
                       width={500}
                       height={300}
                       className={"rounded-tl-2xl rounded-br-2xl"}
                       placeholder="blur"
                       blurDataURL={"/Spinner.svg"}
                       style={{
                           maxWidth: "100%",
                           width:500,
                           height:300,
                       }}
                />
                <div>
                    <h1 className="text-amber-500 font-bold text-3xl mb-3 pl-2">{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p className="pt-3"><span className={"font-semibold mr-2"}>Released Date:</span> {releasedDate}</p>
                    <p className="pt-3"><span className={"font-semibold mr-2"}>Rating:</span> {movie.vote_average}</p>
                </div>
            </div>
            {/*<DisplayMovie id={movieId}/>*/}
        </div>
    )
}