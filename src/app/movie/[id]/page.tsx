import Image from "next/image";
import DisplayMovie from "@/components/movies/DisplayMovie";


export default async function Page({params}: {params: {id: string}}) {
    console.log('from id page', params)
    const movieId = params.id
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
                                .then(res => res.json())

    console.log(movie)
    return(
        <div className={"w-full"}>
            <div
                className={"p-4 md:pt-8 flex flex-col  md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6"}>
                <Image alt={movie.title}
                       src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                       width={500}
                       height={300}
                       className={"rounded-tl-2xl rounded-br-2xl"}
                       style={{
                           maxWidth: "100%",
                           height: "100%",
                       }}
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <DisplayMovie id={movieId}/>
        </div>
    )
}